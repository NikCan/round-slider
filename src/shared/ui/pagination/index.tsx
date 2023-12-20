import { FC } from "react";
import { classNames } from "shared/lib";
import s from "./Pagination.module.scss";

interface PaginationProps {
  className?: string;
  totalSlides: number;
  currentSlide: number;
  onSlideChange: (slide: number) => void;
}
export const Pagination: FC<PaginationProps> = ({
  className,
  totalSlides,
  currentSlide,
  onSlideChange,
}) => {
  const dotArr = Array.from({ length: totalSlides }, (_, index) => index + 1);

  return (
    <div className={classNames(s.Pagination, {}, [className])}>
      {dotArr.map((el) => (
        <span
          key={el}
          onClick={() => onSlideChange(el)}
          className={classNames(
            s.dot,
            { [s.activeDot]: el === currentSlide },
            []
          )}
        />
      ))}
    </div>
  );
};
