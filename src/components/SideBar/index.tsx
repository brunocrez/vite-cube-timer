import { ScoreTable } from "../ScoreTable";
import { TimeListTable } from "../TimeListTable";

import { Container, Wrapper } from "./styles";

export function SideBar() {
  return (
    <Container>
      <ScoreTable />
      <Wrapper>
        <TimeListTable />
      </Wrapper>
    </Container>
  );
}
