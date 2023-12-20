import { Date, usePeriodStore } from "entities/period";
import { FC } from "react";
import { events } from "shared/const";
import { classNames, useWindowSize } from "shared/lib";
import { CircleSwitch, EventsSwipper, PeriodsSlider } from "widgets";
import s from "./HistoricalDates.module.scss";

interface HistoricalDatesProps {
  className?: string;
}
export const HistoricalDates: FC<HistoricalDatesProps> = ({ className }) => {
  const { breakpoints } = useWindowSize();
  const { start, end, index } = usePeriodStore();
  const filteredEvents = events.filter(
    (el) => el.year >= start && el.year <= end
  );

  const mobile = breakpoints.sm;

  return (
    <div className={classNames(s.HistoricalDates, {}, [className])}>
      <div className={s.pageTitle}>Исторические события</div>
      <div className={s.horizontalLine} />
      {!mobile && <div className={s.verticalLine} />}
      {!mobile && <CircleSwitch title={filteredEvents[0].title} />}
      <div className={s.BottomContainer}>
        <PeriodsSlider index={index} />
        <EventsSwipper events={filteredEvents} />
      </div>
      <Date year={start} className={s.startYear} />
      <Date year={end} className={s.endYear} />
    </div>
  );
};
