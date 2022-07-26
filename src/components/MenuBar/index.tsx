import { Container, MenuButton, HomeIcon } from "./styles";

export function MenuBar() {
  return (
    <Container>
      <MenuButton>
        <HomeIcon />
        <span>Página Inicial</span>
      </MenuButton>
    </Container>
  );
}
