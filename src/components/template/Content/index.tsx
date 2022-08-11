import { Container } from "./styles";

interface ContentProps {
  children: React.ReactNode;
}

export function Content(props: ContentProps) {
  return <Container>{props.children}</Container>;
}
