import React from "react";
import _get from "lodash/get";

import { Tbody, Tr, Td } from "./styles";

interface IProps {
  data: any[];
  columns: any[]
  onRowClick: (rowData?: any, rowIndex?: number) => void;
}

const TableBody = ({ data, columns, onRowClick }: IProps) => {
  return (
    <Tbody>
      {data.map((rowItem: any, rowIndex: number) => (
        <Tr key={rowIndex} onClick={() => onRowClick(rowItem, rowIndex)} clickable={!!onRowClick}>
          {columns.map((colItem: any, colIndex: number) => (
            <Td key={colIndex} style={colItem.width && {width: colItem.width}}>
              {colItem.render
                ? colItem.render(rowItem, rowIndex)
                : _get(rowItem, colItem.key, "")}
            </Td>
          ))}
        </Tr>
      ))}
    </Tbody>
  );
};

export default TableBody;
