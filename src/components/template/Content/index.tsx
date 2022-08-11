interface ContentProps {
  children: React.ReactNode;
}

export function Content(props: ContentProps) {
  return <div>{props.children}</div>;
}
