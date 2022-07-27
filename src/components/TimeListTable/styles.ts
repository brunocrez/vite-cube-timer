import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-height: 165px;
  overflow-y: auto;
  overflow-x: hidden;

  @media (min-width: 768px) {
    display: none;
  }

  table {
    width: 100%;
    min-width: 2rem;
    border: 1px solid #ccc;
    border-style: dashed;
    text-align: center;
    margin: 1.5rem;

    th,
    td {
      padding: 0.25rem;
      font-size: 1.05rem;
    }
  }

  position: absolute;
  bottom: 2.25rem;
`;
