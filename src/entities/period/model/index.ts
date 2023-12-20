import { timePoints } from "shared/const";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface PeriodState {
  index: number;
  start: number;
  end: number;
}

type PeriodActions = {
  setPeriod: (index: number) => void;
  setNextPeriod: () => void;
  setPrevPeriod: () => void;
};

export const usePeriodStore = create(
  devtools(
    immer<PeriodState & PeriodActions>((set, get) => ({
      index: 1,
      start: timePoints[0],
      end: timePoints[1],
      setPeriod: (index) => {
        set((state) => {
          state.start = timePoints[index - 1];
          state.end = timePoints[index];
          state.index = index;
        });
      },
      setPrevPeriod: () => {
        set((state) => {
          state.index--;
          state.start = timePoints[state.index - 1];
          state.end = timePoints[state.index];
        });
      },
      setNextPeriod: () => {
        set((state) => {
          state.index++;
          state.start = timePoints[state.index - 1];
          state.end = timePoints[state.index];
        });
      },
    }))
  )
);

export const { setPeriod, setNextPeriod, setPrevPeriod } =
  usePeriodStore.getState();
