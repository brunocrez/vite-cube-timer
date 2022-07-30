import { Table } from "../Table/styles";

export function TimeListTable() {
  return (
    <Table borderColor="var(--medium-blue)" borderStyle="solid">
      <thead>
        <tr>
          <th></th>
          <th>time</th>
          <th>ao3</th>
          {/* <th>ao12</th> */}
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>41</th>
          <td>16.88</td>
          <td>14.96</td>
          {/* <td>19.85</td> */}
        </tr>
      </tbody>
    </Table>
  );
}
