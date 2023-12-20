import { FC } from "react";
import s from "./EventCard.module.scss";
import { classNames } from "shared/lib";
import { IEvent } from "../model";

interface EventProps {
  className?: string;
  event: IEvent;
}
export const EventCard: FC<EventProps> = ({ className, event }) => {
  return (
    <div className={classNames(s.EventCard, {}, [className])}>
      <div className={s.year}>{event.year}</div>
      <div className={s.text}>{event.description}</div>
    </div>
  );
};
