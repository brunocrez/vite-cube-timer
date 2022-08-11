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
  // keyPressed: KeyboardEvent | null;
}

export function Stopwatch(props: StopwatchProps) {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [keyPressed, setKeyPressed] = useState<KeyboardEvent | null>(null);
  const [releaseTimer, setReleaseTimer] = useState(false);

  const { addTime } = useContext(TimeListContext) as ITimeListContext;

  const timestamp = useRef(0);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      removeEventListener("keydown", handleKeyDown);
      removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useEffect(() => {
    const isSpaceBar = keyPressed?.key === " ";

    if (isRunning && isSpaceBar) {
      setIsRunning(false);
      props.genScramble(true);
      const data: ITime = {
        numberTime: time,
        scramble: props.currentScramble,
        stringTime: numberToStopwatch(time),
      };
      addTime(data);
    } else if (!isRunning && isSpaceBar && releaseTimer) {
      setTime(0);
      setIsRunning(true);
      props.genScramble(false);
    }
  }, [keyPressed]);

  useEffect(() => {
    let interval: NodeJS.Timer;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  function handleKeyDown(e: KeyboardEvent) {
    setKeyPressed(e);
    setReleaseTimer(false);

    if (e.key !== " " || e.repeat) {
      return;
    }

    timestamp.current = Date.now();
  }

  function handleKeyUp(e: KeyboardEvent) {
    if (e.key !== " ") {
      return;
    }

    const pressed = timestamp.current;
    const released = Date.now();

    if (released - pressed < 1000) {
      return;
    }

    setKeyPressed(e);
    setReleaseTimer(true);
  }

  return <span>{numberToStopwatch(time)}</span>;
}
