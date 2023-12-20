import { setPeriod, usePeriodStore } from "entities/period";
import { FC, useEffect, useMemo, useState } from "react";
import { timePoints } from "shared/const";
import { classNames } from "shared/lib";
import { Circle } from "shared/ui";
import s from "./CircleSwitch.module.scss";

interface Point {
  id: number;
  x: number;
  y: number;
}
const radius = 265;
const diameter = 2 * radius;
const numPoints = timePoints.length - 1;
const pointRadius = 3;
const currentPointRadius = 28;

export const CircleSwitch: FC<{ title: string }> = ({ title }) => {
  const [points, setPoints] = useState<Point[]>([]);
  const currentPoint = usePeriodStore((state) => state.index);
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  useEffect(() => {
    const newPoints = [];

    for (let i = 0; i < numPoints; i++) {
      const angle = ((i - currentPoint) / numPoints) * 2 * Math.PI;
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);

      newPoints.push({ id: i + 1, x, y });
    }

    setPoints(newPoints);
  }, [currentPoint]);

  const handlePointClick = (id: number) => {
    setPeriod(id);
  };

  const renderPoints = useMemo(() => {
    return points.map((point) => {
      const active = point.id === currentPoint;
      const hovered = point.id === hoveredPoint;
      return (
        <>
          <div
            key={point.id}
            className={classNames(s.point, { [s.activePoint]: active }, [])}
            style={{
              height:
                active || hovered ? currentPointRadius * 2 : pointRadius * 2,
              width:
                active || hovered ? currentPointRadius * 2 : pointRadius * 2,
              left: `calc(50% + ${
                point.x - (active || hovered ? currentPointRadius : pointRadius)
              }px)`,
              top: `calc(50% + ${
                point.y - (active || hovered ? currentPointRadius : pointRadius)
              }px)`,
            }}
            onClick={() => handlePointClick(point.id)}
            onMouseEnter={() => setHoveredPoint(point.id)}
            onMouseLeave={() => setHoveredPoint(null)}
          >
            {point.id}
            {currentPoint === point.id && (
              <span className={s.title}>{title}</span>
            )}
          </div>
        </>
      );
    });
  }, [currentPoint, points, hoveredPoint, title]);

  return (
    <div
      className={s.CircleSwitch}
      style={{ height: `${diameter}px`, width: `${diameter}px` }}
    >
      <Circle diameter={diameter} className={s.circle} />
      {renderPoints}
    </div>
  );
};
