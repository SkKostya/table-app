import styled, { css } from "styled-components";

import { colors } from "../../../constants";

export const Tr = styled.tr<{ clickable?: boolean }>`
  ${props => props.clickable && css`
    cursor: pointer;
  `}
`;

export const Td = styled.td`
  padding: 16px 24px;
  border-bottom: 1px solid ${colors.darkTelegray};
  font-size: 15px;
  text-align: left;
  color: ${colors.portGore};
  background-color: white;
`;

export const Tbody = styled.tbody``;