import styled from "styled-components";

interface TableProps {
  borderStyle: string;
  borderColor: string;
}

export const Table = styled.table<TableProps>`
  border-collapse: collapse;
  width: 100%;
  height: 100%;
  max-height: 10rem;

  border: 1px solid ${(props) => props.borderColor};
  border-style: ${(props) => props.borderStyle};

  th,
  td {
    padding: 0.25rem;
    font-size: 1.05rem;
    text-align: center;
  }

  th {
    color: var(--primary);
    background: #ccc;
  }
`;
