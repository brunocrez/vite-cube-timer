import { ScoreTable } from "@/components/ScoreTable";
import { TimeListTable } from "@/components/TimeListTable";

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
