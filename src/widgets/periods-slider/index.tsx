import { FC } from "react";
import s from './PeriodsSlider.module.scss'
import { Navigation, Pagination } from "shared/ui";
import { timePoints } from "shared/const";
import { useWindowSize } from "shared/lib";
import { setNextPeriod, setPeriod, setPrevPeriod } from "entities/period";

interface PeriodsSliderProps {
  index: number;
}
export const PeriodsSlider: FC<PeriodsSliderProps> = ({index}) => {
  const { breakpoints } = useWindowSize();
  const totalSlides = timePoints.length - 1;
  const mobile = breakpoints.sm;

  return (
    <div
      className={s.navigationContainer}
      style={{
        width: mobile ? 58 : 120,
        height: mobile ? 50 : 88,
      }}
    >
      <div>{`0${index}/0${totalSlides}`}</div>
      <Navigation
        size={mobile ? 25 : 50}
        small={mobile}
        onNextClick={setNextPeriod}
        onPrevClick={setPrevPeriod}
        first={index === 1}
        last={index === totalSlides}
      />
      <div className={s.paginationContainer}>
        {mobile && (
          <Pagination
            totalSlides={totalSlides}
            currentSlide={index}
            onSlideChange={setPeriod}
          />
        )}
      </div>
    </div>
  );
};
