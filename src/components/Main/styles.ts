import styled, { css } from "styled-components";
import { Home } from "../../styles/Icons";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: min(1024px, 100%);
  background-color: green;

  @media (min-width: 500px) {
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
  padding: 1rem 0.75rem;

  text-align: left;
`;

export const Level = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;

  background: black;
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;

  > strong {
    font-size: 1.25rem;
  }
`;

export const ExperienceBar = styled.div`
  width: 100%;
  height: 1rem;
  background: #ddd;
  border-radius: 0.5rem;
  overflow: hidden;

  > div {
    width: 84%;
    height: 100%;
    padding-right: 0.5rem;
    font-size: 0.75rem;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    background-color: red;
  }
`;

export const Scramble = styled.div`
  display: flex;
  justify-content: center;

  font-size: 2.15rem;
  letter-spacing: 0.15rem;

  padding: 0.75rem;
  margin: 1rem;
`;

export const Timer = styled.div`
  font-size: 12rem;

  display: flex;
  justify-content: center;

  margin: 4.5rem 0;
`;

export const Average = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  > span {
    font-size: 2rem;
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

  @media (min-width: 500px) {
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
