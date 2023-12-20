import { FC } from "react";
import s from "./Date.module.scss";
import { classNames } from "shared/lib";

interface DateProps {
  className?: string;
  year: number;
}
export const Date: FC<DateProps> = ({ className, year }) => {
  return <div className={classNames(s.Date, {}, [className])}>{year}</div>;
};
