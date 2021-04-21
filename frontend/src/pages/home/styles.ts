import styled from "styled-components";

import { colors } from "../../constants";

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  & > div:not(:first-child) {
    margin-left: 16px;
  }
`;

export const FilterInput = styled.input`
  padding: 8px 12px;
  width: 150px;
  border: 1px solid ${colors.lavender};
  border-radius: 4px;
  box-sizing: border-box;
  outline-color: ${colors.darkTelegray};
  font-size: 14px;
  line-height: 17px;
  color: ${colors.darkTelegray};
  background-color: ${colors.white};
`;
