import styled, { css } from "styled-components";

import { Home } from "../../styles/Icons";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: min(1024px, 100%);
  height: 100vh;
  background-color: var(--primary);

  @media (min-width: 576px) {
    border-left: 1px solid yellow;
    border-right: 1px solid yellow;
  }
`;

export const Header = styled.div`
  z-index: 2;
  position: sticky;
  top: 0;
  background: blue;

  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 1.25rem;

  padding: 1rem 0.75rem;
`;

export const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > strong {
    font-size: 1.15rem;
  }

  > img {
    width: 22px;
    height: 22px;
  }
`;

export const ExperienceInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const ExperienceBar = styled.div`
  width: 6rem;
  height: 0.5rem;
  background: #ddd;

  > div {
    width: 84%;
    height: 100%;

    background-color: red;
  }
`;

export const Level = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 6px;

  background: black;
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 0.8rem;
`;

export const Scramble = styled.div`
  display: flex;
  justify-content: center;

  font-size: 1.85rem;
  letter-spacing: 0.15rem;

  padding: 0.75rem;
  margin: 1rem;

  @media (min-width: 1024px) {
    font-size: 2.15rem;
  }
`;

export const Timer = styled.div`
  font-size: 6rem;

  display: flex;
  justify-content: center;

  margin: 4.5rem 0;

  @media (min-width: 576px) {
    font-size: 10rem;
  }

  @media (min-width: 768px) {
    font-size: 12rem;
  }
`;

export const Average = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  > span {
    font-size: 1.5rem;

    @media (min-width: 576px) {
      font-size: 2rem;
    }
  }
`;

export const BottomMenu = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;

  background: purple;
  width: 100%;

  display: flex;
  justify-content: space-between;

  padding: 0.5rem min(4rem, max(10vw, 1rem));

  @media (min-width: 576px) {
    display: none;
  }
`;

const iconCSS = css`
  width: 30px;
  height: 30px;

  cursor: pointer;

  &:hover {
    fill: white;
  }
`;

export const HomeIcon = styled(Home)`
  ${iconCSS}
`;
