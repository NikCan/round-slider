import { FC } from "react";
import s from "./Circle.module.scss";
import { classNames } from "shared/lib";

interface CircleProps {
  className?: string;
  diameter: number;
}

export const Circle: FC<CircleProps> = ({ className, diameter }) => {
  return (
    <div
      style={{ height: diameter, width: diameter }}
      className={classNames(s.Circle, {}, [className])}
    />
  );
};
