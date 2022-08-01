import { useContext, useEffect, useState } from "react";
import {
  ITimeListContext,
  TimeListContext,
} from "../../contexts/TimeListContext";

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

  return (
    <div>
      <div>
        {Math.floor((time / 60000) % 60) >= 1 && (
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        )}
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
    </div>
  );
}
