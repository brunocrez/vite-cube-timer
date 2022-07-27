import {
  Container,
  Header,
  Level,
  ProfileInfo,
  ExperienceBar,
  ExperienceInfo,
  Scramble,
  Timer,
  Average,
  BottomMenu,
  HomeIcon,
} from "./styles";

import BrasilFlag from "../../assets/flags/brasil.png";

export function Main() {
  return (
    <Container>
      <Header>
        <ProfileInfo>
          <strong>brunocrez</strong>
          <img src={BrasilFlag} alt="Flag" />
        </ProfileInfo>
        <ExperienceInfo>
          <ExperienceBar>
            <div></div>
          </ExperienceBar>
          <Level>42</Level>
        </ExperienceInfo>
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
