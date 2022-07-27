import {
  Container,
  IconsWrapper,
  MenuButton,
  Logo,
  TimerIcon,
  FriendshipIcon,
  ProfileIcon,
} from "./styles";

export function MenuBar() {
  return (
    <Container>
      <IconsWrapper>
        <Logo />
        <MenuButton>
          <TimerIcon />
          <span>Timer</span>
        </MenuButton>
        <MenuButton>
          <FriendshipIcon />
          <span>Friendship</span>
        </MenuButton>
        <MenuButton>
          <ProfileIcon />
          <span>Profile</span>
        </MenuButton>
      </IconsWrapper>
    </Container>
  );
}
