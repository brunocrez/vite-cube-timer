import { Table } from "../Table/styles";

export function ScoreTable() {
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
          <td>16.88</td>
          <td>14.96</td>
        </tr>
        <tr>
          <th>ao5</th>
          <td>16.88</td>
          <td>14.96</td>
        </tr>
        <tr>
          <th>ao12</th>
          <td>16.88</td>
          <td>14.96</td>
        </tr>
        <tr>
          <th>ao100</th>
          <td>16.88</td>
          <td>14.96</td>
        </tr>
      </tbody>
    </Table>
  );
}
