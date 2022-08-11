import { createContext, useState } from "react";

// types
import { ITime, ITimeListContext } from "@/@types/timeList";

// utils
import { millisToTime } from "@/utils";

export const TimeListContext = createContext<ITimeListContext | null>(null);

interface TimeListProviderProps {
  children: React.ReactNode;
}

export function TimeListProvider(props: TimeListProviderProps) {
  const [timeList, setTimeList] = useState<ITime[]>([]);

  const calcAverage3 = () => {
    let sum = 0;

    if (timeList.length < 3) {
      return {
        stringAverage: "-",
        numberAverage: 0,
      };
    }

    for (let i = timeList.length - 1; i > timeList.length - 4; i--) {
      sum = sum + timeList[i].numberTime;
    }

    return {
      stringAverage: millisToTime(sum / 3),
      numberAverage: sum / 3,
    };
  };

  const calcAverage5 = (idx: number) => {
    let sum = 0;
    let min = Number.MAX_VALUE;
    let max = Number.MIN_VALUE;

    if (timeList.length < 5 || idx < 4) {
      return {
        stringAverage: "-",
        numberAverage: 0,
      };
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

    return {
      stringAverage: millisToTime(sum / 3),
      numberAverage: sum / 3,
    };
  };

  const calcAverage12 = (idx: number) => {
    let sum = 0;
    let min = Number.MAX_VALUE;
    let max = Number.MIN_VALUE;

    if (timeList.length < 12 || idx < 11) {
      return {
        stringAverage: "-",
        numberAverage: 0,
      };
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

    return {
      stringAverage: millisToTime(sum / 10),
      numberAverage: sum / 10,
    };
  };

  const calcAverage100 = (idx: number) => {
    let sum = 0;
    let min = Number.MAX_VALUE;
    let max = Number.MIN_VALUE;

    if (timeList.length < 100 || idx < 99) {
      return {
        stringAverage: "-",
        numberAverage: 0,
      };
    }

    for (let i = idx; i > idx - 100; i--) {
      if (timeList[i].numberTime < min) {
        min = timeList[i].numberTime;
      }

      if (timeList[i].numberTime > max) {
        max = timeList[i].numberTime;
      }

      sum = sum + timeList[i].numberTime;
    }

    sum = sum - min - max;

    return {
      stringAverage: millisToTime(sum / 98),
      numberAverage: sum / 98,
    };
  };

  const addTime = (time: ITime) => {
    setTimeList((prevState) => [...prevState, time]);
  };

  return (
    <TimeListContext.Provider
      value={{
        timeList,
        addTime,
        calcAverage3,
        calcAverage5,
        calcAverage12,
        calcAverage100,
      }}
    >
      {props.children}
    </TimeListContext.Provider>
  );
}
