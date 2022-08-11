import styled, { css } from "styled-components";

import { PuzzleCube, Timer, UserFriends, Profile } from "@/styles/Icons";

export const Container = styled.div`
  display: none;

  @media (min-width: 576px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: sticky;
    top: 0;
    left: 0;

    padding: 1rem 0.5rem;
    max-height: 100vh;
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1200px) {
    align-items: flex-start;
  }

  > a {
    text-decoration: none;
  }
`;

export const Logo = styled(PuzzleCube)`
  width: 50px;
  height: 50px;
  margin-bottom: 2rem;
  fill: var(--dark-blue);
  align-self: center;
`;

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  > span {
    display: none;
  }

  > div {
    width: 30px;
    height: 30px;
  }

  @media (min-width: 1200px) {
    > span {
      display: inline;
      margin-left: 1rem;
      font-weight: bold;
      font-size: 1rem;
    }

    padding-right: 1rem;
  }

  padding: 1rem;
  outline: 0;

  & + button {
    margin-top: 1rem;
  }

  cursor: pointer;
  border-radius: 1.5rem;

  &:hover {
    background-color: var(--dark-blue);
  }
`;

const iconCSS = css`
  width: 30px;
  height: 30px;
  flex-shrink: 0;
`;

export const TimerIcon = styled(Timer)`
  ${iconCSS}
`;

export const FriendshipIcon = styled(UserFriends)`
  ${iconCSS}
`;

export const ProfileIcon = styled(Profile)`
  ${iconCSS}
`;
