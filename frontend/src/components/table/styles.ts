import styled from "styled-components";

export const StyledTable = styled.table`
  width: 100%;
  border-radius: 12px;
`;

export const Container = styled.div`
  border-radius: 12px;
  margin-top: 20px;
  border: none;
  background-color: transparent;

    ${StyledTable} {
      border-spacing: 0 0;
      border-collapse: separate;
    }
`;
