import { useEffect, useState } from "react";

interface StopwatchProps {
  keyPressed: KeyboardEvent | null;
}

export function Stopwatch(props: StopwatchProps) {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning && props.keyPressed?.key === " ") {
      setIsRunning(false);
    } else if (!isRunning && props.keyPressed?.key === " ") {
      setTime(0);
      setIsRunning(true);
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
