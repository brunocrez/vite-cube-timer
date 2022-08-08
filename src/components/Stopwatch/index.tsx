import { useContext, useEffect, useRef, useState } from "react";

// types
import { ITime, ITimeListContext } from "../../@types/timeList";

// context
import { TimeListContext } from "../../contexts/TimeListContext";

// utils
import { numberToStopwatch } from "../../utils";

interface StopwatchProps {
  genScramble: React.Dispatch<React.SetStateAction<boolean>>;
  currentScramble: string;
}

export function Stopwatch(props: StopwatchProps) {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [timestamp, setTimestamp] = useState<number>(0);

  const { addTime } = useContext(TimeListContext) as ITimeListContext;

  const timeRef = useRef(0);

  // useEffect(() => {}, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    if (isRunning) {
      setIsRunning(false);
      props.genScramble(true);
      const data: ITime = {
        numberTime: time,
        scramble: props.currentScramble,
        stringTime: numberToStopwatch(time),
      };
      addTime(data);
    } else if (!isRunning) {
      setTime(0);
      setIsRunning(true);
      props.genScramble(false);
    }

    return () => {
      removeEventListener("keydown", handleKeyDown);
      removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timer;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key !== " ") {
      return;
    }

    timeRef.current = Date.now();
    setTimestamp(Date.now());
  };

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.key !== " ") {
      return;
    }

    const pressed = timestamp;
    const released = Date.now();

    if (released - pressed < 2000) {
      return;
    }
  };

  return <span>...</span>;
}
