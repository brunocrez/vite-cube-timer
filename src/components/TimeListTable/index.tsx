import { useContext } from "react";

// types
import { ITimeListContext } from "@/@types/timeList";

// contenxt
import { TimeListContext } from "@/contexts/TimeListContext";

// components
import { Table } from "@/components/Table/styles";

export function TimeListTable() {
  const { timeList, calcAverage5, calcAverage12 } = useContext(
    TimeListContext,
  ) as ITimeListContext;

  return (
    <Table borderColor="var(--medium-blue)" borderStyle="solid">
      <thead>
        <tr>
          <th></th>
          <th>time</th>
          <th>ao5</th>
          <th>ao12</th>
        </tr>
      </thead>
      <tbody>
        {timeList
          .map((time, idx) => {
            return (
              <tr key={idx}>
                <th>{idx + 1}</th>
                <td>{time.stringTime}</td>
                <td>{calcAverage5(idx).stringAverage}</td>
                <td>{calcAverage12(idx).stringAverage}</td>
              </tr>
            );
          })
          .reverse()}
      </tbody>
    </Table>
  );
}
