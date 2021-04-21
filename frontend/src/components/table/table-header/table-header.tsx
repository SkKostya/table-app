import React from "react";

import { Thead, Th } from "./styles";

interface ITheader {
  columns: any;
}

const TableHeader = ({ columns }: ITheader) => {
  return (
    <Thead>
      <tr>
        {columns.map((column: any, index: number) => (
          <Th style={column.width && {width: column.width}} key={index}>
            {column.label ? column.label : ""}
          </Th>
        ))}
      </tr>
    </Thead>
  );
};

export default TableHeader;
