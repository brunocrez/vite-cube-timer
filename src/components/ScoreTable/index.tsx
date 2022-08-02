import { useContext } from "react";
import { Table } from "../Table/styles";

// types
import { ITimeListContext } from "../../@types/timeList";

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
          <td>14.96</td>
        </tr>
        <tr>
          <th>ao3</th>
          <td>{calcAverage3()}</td>
          <td>14.96</td>
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
