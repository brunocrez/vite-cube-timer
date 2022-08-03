import { useContext, useEffect, useState } from "react";
import { Table } from "../Table/styles";

// types
import { ITimeListContext, ITime, IAverageReturn } from "../../@types/timeList";

// context
import { TimeListContext } from "../../contexts/TimeListContext";

export function ScoreTable() {
  const {
    timeList,
    calcAverage3,
    calcAverage5,
    calcAverage12,
    calcAverage100,
  } = useContext(TimeListContext) as ITimeListContext;

  const [average3, setAverage3] = useState<IAverageReturn>({
    stringAverage: "-",
    numberAverage: 0,
  });

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
  }, [timeList]);

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
          <td>{bestSingle?.stringTime || "-"}</td>
        </tr>
        <tr>
          <th>ao3</th>
          <td>{average3.stringAverage}</td>
          <td>-</td>
        </tr>
        <tr>
          <th>ao5</th>
          <td>{calcAverage5(timeList.length - 1)}</td>
          <td>14.96</td>
        </tr>
        <tr>
          <th>ao12</th>
          <td>{calcAverage12(timeList.length - 1)}</td>
          <td>14.96</td>
        </tr>
        <tr>
          <th>ao100</th>
          <td>{calcAverage100(timeList.length - 1)}</td>
          <td>14.96</td>
        </tr>
      </tbody>
    </Table>
  );
}
