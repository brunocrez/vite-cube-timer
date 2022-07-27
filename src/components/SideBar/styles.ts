import styled from "styled-components";

export const Container = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;

    position: sticky;
    top: 0;
    left: 0;

    padding: 1rem 0.5rem;
    max-height: 100vh;
  }
`;

export const SessionTimes = styled.div``;
