import { Container, Wrapper } from "./styles";

// components
import { Content } from "../Content";
import { MenuBar } from "../MenuBar";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout(props: LayoutProps) {
  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <Content>{props.children}</Content>
      </Wrapper>
    </Container>
  );
}
