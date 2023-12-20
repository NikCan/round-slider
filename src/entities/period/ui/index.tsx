import gsap from "gsap";
import { FC, useLayoutEffect, useRef } from "react";
import { classNames } from "shared/lib";
import s from "./Date.module.scss";

interface DateProps {
  className?: string;
  year: number;
}
export const Date: FC<DateProps> = ({ className, year }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    gsap.to(ref.current, {
      duration: 0.5,
      innerHTML: year,
      onUpdate: () => {
        ref.current &&
          (ref.current.innerHTML = Math.round(
            +ref.current.innerHTML
          ).toString());
      },
    });
  }, [year]);

  return <div ref={ref} className={classNames(s.Date, {}, [className])} />;
};
