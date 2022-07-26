import {
  Container,
  Header,
  Level,
  ProfileInfo,
  ExperienceBar,
  Scramble,
  Timer,
  Average,
  BottomMenu,
  HomeIcon,
} from "./styles";

export function Main() {
  return (
    <Container>
      <Header>
        <Level>18</Level>
        <ProfileInfo>
          <strong>Bruno Rezende</strong>
          <ExperienceBar>
            <div>84%</div>
          </ExperienceBar>
        </ProfileInfo>
      </Header>
      <Scramble>F B2 L2 D L B R F U2 F2 B U2 D2 R2 U2 B R2 U</Scramble>

      <Timer>26.89</Timer>

      <Average>
        <span>ao5: 12.99</span>
        <span>ao12: 18.99</span>
        <span>ao100: 12.99</span>
      </Average>

      <BottomMenu>
        <HomeIcon />
        <HomeIcon />
        <HomeIcon />
        <HomeIcon />
      </BottomMenu>
    </Container>
  );
}
