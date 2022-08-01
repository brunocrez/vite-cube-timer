import { Container, Wrapper } from "./styles";

import { Main } from "../Main";
import { MenuBar } from "../MenuBar";
import { SideBar } from "../SideBar";
import { TimeListProvider } from "../../contexts/TimeListContext";

export function Layout() {
  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <TimeListProvider>
          <Main />
          <SideBar />
        </TimeListProvider>
      </Wrapper>
    </Container>
  );
}
