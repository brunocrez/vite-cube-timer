import { createContext, useState } from "react";

import { ITime, ITimeListContext } from "../../@types/timeList";
import { numberToStopwatch } from "../../utils";

export const TimeListContext = createContext<ITimeListContext | null>(null);

interface TimeListProviderProps {
  children: React.ReactNode;
}

export function TimeListProvider(props: TimeListProviderProps) {
  const [timeList, setTimeList] = useState<ITime[]>([]);

  const addTime = (time: ITime) => {
    setTimeList((prevState) => [...prevState, time]);
  };

  const averageOf = (num: number, idx = 0): string => {
    const listSize = timeList.length;
    let sum = 0;
    let min = 0;
    let max = 0;

    if (listSize < 3) {
      return "-";
    }

    if (num === 3) {
      for (let i = timeList.length - 1; i > listSize - 4; i--) {
        sum = sum + timeList[i].numberTime;
      }

      return numberToStopwatch(sum / 3);
    }

    if (num === 5) {
      if (listSize < 5 || idx < 4) {
        return "-";
      }

      for (let i = idx; i > idx - 5; i--) {
        if (timeList[i].numberTime < min) {
          min = timeList[i].numberTime;
        }

        if (timeList[i].numberTime > max) {
          max = timeList[i].numberTime;
        }

        sum = sum + timeList[i].numberTime;
      }

      sum = sum - min - max;

      return numberToStopwatch(sum / 3);
    }

    if (num === 12) {
      if (listSize < 12 || idx < 11) {
        return "-";
      }

      for (let i = idx; i > idx - 12; i--) {
        if (timeList[i].numberTime < min) {
          min = timeList[i].numberTime;
        }

        if (timeList[i].numberTime > max) {
          max = timeList[i].numberTime;
        }

        sum = sum + timeList[i].numberTime;
      }

      sum = sum - min - max;

      return numberToStopwatch(sum / 10);
    }

    return "-";
  };

  return (
    <TimeListContext.Provider value={{ timeList, addTime, averageOf }}>
      {props.children}
    </TimeListContext.Provider>
  );
}
