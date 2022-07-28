import styled from "styled-components";

export const TableWrapper = styled.div`
  overflow: auto;
  height: 8rem;
  margin: 1rem 1.5rem;

  ::-webkit-scrollbar {
    width: 0;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;
