import { Container, SessionTimes } from "./styles";

export function SideBar() {
  return (
    <Container>
      <SessionTimes>
        <table>
          <tbody>
            <tr>
              <th>-</th>
              <th>time</th>
              <th>ao5</th>
              <th>ao12</th>
            </tr>
            <tr>
              <th>41</th>
              <td>16.88</td>
              <td>14.96</td>
              <td>19.85</td>
            </tr>
            <tr>
              <th>42</th>
              <td>16.88</td>
              <td>14.96</td>
              <td>19.85</td>
            </tr>
            <tr>
              <th>43</th>
              <td>16.88</td>
              <td>14.96</td>
              <td>19.85</td>
            </tr>
          </tbody>
        </table>
      </SessionTimes>
    </Container>
  );
}
