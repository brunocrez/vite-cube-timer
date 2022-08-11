import { useContext, useEffect, useState } from "react";

// types
import { ITimeListContext, ITime, IAverageReturn } from "@/@types/timeList";

// context
import { TimeListContext } from "@/contexts/TimeListContext";

// components
import { Table } from "@/components/Table/styles";

const DEFAULT_AVERAGE = { stringAverage: "-", numberAverage: 0 };
const DEFAULT_BEST_AVERAGE = {
  stringAverage: "-",
  numberAverage: Number.MAX_VALUE,
};

export function ScoreTable() {
  const {
    timeList,
    calcAverage3,
    calcAverage5,
    calcAverage12,
    calcAverage100,
  } = useContext(TimeListContext) as ITimeListContext;

  const [average3, setAverage3] = useState<IAverageReturn>(DEFAULT_AVERAGE);
  const [bestAverage3, setBestAverage3] =
    useState<IAverageReturn>(DEFAULT_BEST_AVERAGE);

  const [average5, setAverage5] = useState<IAverageReturn>(DEFAULT_AVERAGE);
  const [bestAverage5, setBestAverage5] =
    useState<IAverageReturn>(DEFAULT_BEST_AVERAGE);

  const [average12, setAverage12] = useState<IAverageReturn>(DEFAULT_AVERAGE);
  const [bestAverage12, setBestAverage12] =
    useState<IAverageReturn>(DEFAULT_BEST_AVERAGE);

  const [average100, setAverage100] = useState<IAverageReturn>(DEFAULT_AVERAGE);
  const [bestAverage100, setBestAverage100] =
    useState<IAverageReturn>(DEFAULT_BEST_AVERAGE);

  const [bestSingle, setBestSingle] = useState<ITime>({
    scramble: "",
    numberTime: Number.MAX_VALUE,
    stringTime: "-",
  });

  useEffect(() => {
    if (timeList[timeList.length - 1]?.numberTime < bestSingle?.numberTime) {
      setBestSingle(timeList[timeList.length - 1]);
    }

    setAverage3(calcAverage3());
    setAverage5(calcAverage5(timeList.length - 1));
    setAverage12(calcAverage12(timeList.length - 1));
    setAverage100(calcAverage100(timeList.length - 1));
  }, [timeList]);

  if (
    average3.numberAverage > 0 &&
    average3.numberAverage < bestAverage3.numberAverage
  ) {
    setBestAverage3(average3);
  }

  if (
    average5.numberAverage > 0 &&
    average5.numberAverage < bestAverage5.numberAverage
  ) {
    setBestAverage5(average5);
  }

  if (
    average12.numberAverage > 0 &&
    average12.numberAverage < bestAverage12.numberAverage
  ) {
    setBestAverage12(average12);
  }

  if (
    average100.numberAverage > 0 &&
    average100.numberAverage < bestAverage100.numberAverage
  ) {
    setBestAverage100(average100);
  }

  return (
    <Table borderColor="var(--medium-blue)" borderStyle="solid">
      <thead>
        <tr>
          <th></th>
          <th>current</th>
          <th>best</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>time</th>
          <td>{timeList[timeList.length - 1]?.stringTime || "-"}</td>
          <td>{bestSingle?.stringTime}</td>
        </tr>
        <tr>
          <th>ao3</th>
          <td>{average3.stringAverage}</td>
          <td>{bestAverage3.stringAverage}</td>
        </tr>
        <tr>
          <th>ao5</th>
          <td>{average5.stringAverage}</td>
          <td>{bestAverage5.stringAverage}</td>
        </tr>
        <tr>
          <th>ao12</th>
          <td>{average12.stringAverage}</td>
          <td>{bestAverage12.stringAverage}</td>
        </tr>
        <tr>
          <th>ao100</th>
          <td>{average100.stringAverage}</td>
          <td>{bestAverage100.stringAverage}</td>
        </tr>
      </tbody>
    </Table>
  );
}
