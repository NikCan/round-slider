import { FC } from "react";
import s from "./Navigation.module.scss";
import prevImg from "./prev.svg";
import nextImg from "./next.svg";
import prevSmallImg from "./prev-small.svg";
import nextSmallImg from "./next-small.svg";

interface NavigationProps {
  size: number;
  small?: boolean;
  first?: boolean;
  last?: boolean;
  onPrevClick: () => void;
  onNextClick: () => void;
}
export const Navigation: FC<NavigationProps> = ({
  size,
  small,
  first,
  last,
  onNextClick,
  onPrevClick,
}) => {
  return (
    <div className={s.Navigation}>
      <button
        disabled={first}
        className={s.buttonPrev}
        style={{ height: size, width: size }}
        onClick={onPrevClick}
      >
        <img src={small ? prevSmallImg : prevImg} alt="" />
      </button>
      <button
        disabled={last}
        className={s.buttonNext}
        style={{ height: size, width: size }}
        onClick={onNextClick}
      >
        <img src={small ? nextSmallImg : nextImg} alt="" />
      </button>
    </div>
  );
};
