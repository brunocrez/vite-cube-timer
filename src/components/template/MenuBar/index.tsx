import * as S from "./styles";

export function MenuBar() {
  return (
    <S.Container>
      <S.IconsWrapper>
        <S.Logo />
        <S.MenuButton>
          <S.TimerIcon />
          <span>Timer</span>
        </S.MenuButton>
        <S.MenuButton>
          <S.FriendshipIcon />
          <span>Friendship</span>
        </S.MenuButton>
        <S.MenuButton>
          <S.ProfileIcon />
          <span>Profile</span>
        </S.MenuButton>
      </S.IconsWrapper>
    </S.Container>
  );
}
