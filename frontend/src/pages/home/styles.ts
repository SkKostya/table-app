import styled, { css } from "styled-components";

import { colors } from "../../constants";

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
`;

export const Header = styled.header`
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

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  padding-bottom: 30px;
`;

export const PageButton = styled.button<{ isActive: boolean }>`
  padding: 10px;
  width: 39px;
  border: 1px solid ${colors.darkTelegray};
  border-radius: 50%;
  font-size: 14px;
  line-height: 17px;
  color: ${colors.grayBlue};

  &:not(:last-child) {
    margin-right: 16px;
  }

  ${({ isActive }) =>
  isActive && css`
    box-shadow: inset 0 0 10px 5px ${colors.lavender};
  `}
`;

export const RemoveButton = styled.button`
  font-size: 30px;
  color: red;
  cursor: pointer;
`;
