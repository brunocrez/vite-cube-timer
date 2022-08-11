import { Container } from "./styles";

interface SideBarProps {
  children: React.ReactNode;
}

export function SideBar(props: SideBarProps) {
  return <Container>{props.children}</Container>;
}
