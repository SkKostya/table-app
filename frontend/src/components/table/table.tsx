import React from "react";

import { Container, StyledTable } from "./styles";
import TableHeader from "./table-header";
import TableBody from "./table-body";

export interface ITableColumns {
  key: string;
  label?: string;
  width?: string;
  render?: (item?: any, rowIndex?: number) => void;
}

interface IProps {
  data: any;
  columns: ITableColumns[]
  onRowClick?: (rowData?: any, rowIndex?: number) => void;
}

const Table = ({
  data,
  columns,
  onRowClick = () => null
}: IProps) => {
  return (
    <Container>
      <StyledTable>
        <TableHeader columns={columns} />
        <TableBody data={data} columns={columns} onRowClick={onRowClick} />
      </StyledTable>
    </Container>
  );
};

export default Table;
