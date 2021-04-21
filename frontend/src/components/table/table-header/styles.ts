import styled from "styled-components";

import { colors } from "../../../constants";

export const Th = styled.th`
  padding: 0px 16px;
  padding-left: 24px;
  font-size: 13px;
  font-weight: normal;
  line-height: 16px;
  text-align: left;
  color: ${colors.darkTelegray};
`;

export const Thead = styled.thead`
  line-height: 0;
  border: none;
  background-color: inherit;
`;