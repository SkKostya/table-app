import styled, { css } from "styled-components";

import { colors } from "../../../constants";

const borderRadius = "12px";

export const Tr = styled.tr<{ clickable?: boolean }>`
  ${props => props.clickable && css`
    cursor: pointer;
  `}
`;

export const Td = styled.td`
  padding: 16px 24px;
  font-size: 15px;
  text-align: left;
  color: ${colors.portGore};
  background-color: white;

  &:last-child {
    border-top-right-radius: ${borderRadius};
    border-bottom-right-radius: ${borderRadius};
  }

  &:first-child {
    border-top-left-radius: ${borderRadius};
    border-bottom-left-radius: ${borderRadius};
  }
`;

export const Tbody = styled.tbody``;