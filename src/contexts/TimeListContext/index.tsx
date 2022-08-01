import { createContext, useState } from "react";

export const TimeListContext = createContext<ITimeListContext | null>(null);

interface TimeListProviderProps {
  children: React.ReactNode;
}

interface ITime {
  time: string;
  scramble: string;
}

export interface ITimeListContext {
  timeList: ITime[];
  addTime: (time: ITime) => void;
}

export function TimeListProvider(props: TimeListProviderProps) {
  const [timeList, setTimeList] = useState<ITime[]>([]);

  const addTime = (time: ITime) => {
    setTimeList((prevState) => [...prevState, time]);
  };

  return (
    <TimeListContext.Provider value={{ timeList, addTime }}>
      {props.children}
    </TimeListContext.Provider>
  );
}
