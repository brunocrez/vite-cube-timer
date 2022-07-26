import styled from "styled-components";

export const Container = styled.div`
  display: none;

  @media (min-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: sticky;
    top: 0;
    left: 0;

    padding: 10px 20px 20px;

    max-height: 100vh;
  }
`;

export const MenuButton = styled.div``;
export const HomeIcon = styled.div``;
