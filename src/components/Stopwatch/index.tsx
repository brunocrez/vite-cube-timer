import { useContext, useEffect, useState } from "react";

// types
import { ITime, ITimeListContext } from "../../@types/timeList";

// context
import { TimeListContext } from "../../contexts/TimeListContext";

// utils
import { numberToStopwatch } from "../../utils";

interface StopwatchProps {
  keyPressed: KeyboardEvent | null;
  genScramble: React.Dispatch<React.SetStateAction<boolean>>;
  currentScramble: string;
}

export function Stopwatch(props: StopwatchProps) {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const { addTime } = useContext(TimeListContext) as ITimeListContext;

  useEffect(() => {
    if (isRunning && props.keyPressed?.key === " ") {
      setIsRunning(false);
      props.genScramble(true);
      const data: ITime = {
        numberTime: time,
        scramble: props.currentScramble,
        stringTime: numberToStopwatch(time),
      };
      addTime(data);
    } else if (!isRunning && props.keyPressed?.key === " ") {
      setTime(0);
      setIsRunning(true);
      props.genScramble(false);
    }
  }, [props.keyPressed]);

  useEffect(() => {
    let interval: number;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  return <span>{numberToStopwatch(time)}</span>;
}
