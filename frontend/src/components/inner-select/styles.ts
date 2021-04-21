import styled from "styled-components";

import { colors } from "../../constants";

export const Container = styled.div`
  position: relative;
  padding: 8px 12px;
  border: 1px solid ${colors.lavender};
  border-radius: 4px;
  box-sizing: border-box;
  background-color: ${colors.white};
`;

export const TitleSelect = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  font-size: 14px;
  line-height: 17px;
  color: ${colors.darkTelegray};
  cursor: pointer;
`;

export const TitleItem = styled.span`
  margin-left: 4px;
  font-size: 15px;
  color: ${colors.grayBlue};
`;

export const Arrow = styled.span`
  align-self: flex-start;
  margin-top: 3px;
  margin-left: 8px;
  transform: rotate(45deg);
  border-right: 1px solid ${colors.grayBlue};
  border-bottom: 1px solid ${colors.grayBlue};
  width: 7px;
  height: 7px;
`;

export const MenuBox = styled.div`
  position: absolute;
  width: 100%;
  top: 30px;
  left: 50%;
  transform: translate(-50%);
  border: 1px solid ${colors.lavender};
  border-radius: 4px;
  background-color: ${colors.white};
  z-index: 2;
  overflow: hidden;

  ul {
    list-style-type: none;

    li {
      padding: 5px;
      font-size: 15px;
      color: ${colors.portGore};
      cursor: pointer;

      :hover {
        background-color: rgba(0, 0, 0, 0.1);
      }
    }
  }
`;
