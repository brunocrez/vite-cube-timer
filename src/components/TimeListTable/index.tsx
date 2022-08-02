import { useContext } from "react";
import { Table } from "../Table/styles";

// types
import { ITimeListContext } from "../../@types/timeList";

// contenxt
import { TimeListContext } from "../../contexts/TimeListContext";

export function TimeListTable() {
  const { timeList, averageOf } = useContext(
    TimeListContext,
  ) as ITimeListContext;

  return (
    <Table borderColor="var(--medium-blue)" borderStyle="solid">
      <thead>
        <tr>
          <th></th>
          <th>time</th>
          <th>ao5</th>
        </tr>
      </thead>
      <tbody>
        {timeList.map((time, idx) => {
          return (
            <tr key={idx}>
              <th>{idx + 1}</th>
              <td>{time.stringTime}</td>
              <td>{averageOf(5, idx)}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
