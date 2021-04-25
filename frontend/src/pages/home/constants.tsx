import React from "react";
import moment from "moment";

import { RemoveButton } from "./styles";

export const TABLE_COLUMNS = (deleteRow: (id: number) => void) => [
  {
    key: "date",
    width: "25%",
    label: "Дата",
    render: (rowItem: any) => (
      <React.Fragment>
        <div>
          {moment(rowItem.createdat).format("YYYY.MM.DD hh:mm")}
        </div>
      </React.Fragment>
    )
  },
  {
    key: "name",
    width: "50%",
    label: "Название",
    render: (rowItem: any) => (
      <React.Fragment>
        <div>{rowItem.name}</div>
      </React.Fragment>
    )
  },
  {
    key: "amount",
    width: "12%",
    label: "Количество",
    render: (rowItem: any) => (
      <React.Fragment>
        <div>{rowItem.amount}</div>
      </React.Fragment>
    )
  },
  {
    key: "distance",
    width: "12%",
    label: "Расстояние",
    render: (rowItem: any) => (
      <React.Fragment>
        <div>{rowItem.distance}</div>
      </React.Fragment>
    )
  },
  {
    key: "remove",
    width: "1%",
    render: (rowItem: any) => (
      <React.Fragment>
        <RemoveButton onClick={() => deleteRow(rowItem.id)} title="Удалить">&times;</RemoveButton>
      </React.Fragment>
    )
  },
];


export const NAMES = ["Конфеты", "Печеньки", "Пряники"];

export const FIELDS:any = {
  "Все": "all",
  "Название": "name",
  "Количество": "amount",
  "Расстояние": "distance"
};

export const OPERATORS:any = {
  "Равно": "equal",
  "Содержит": "contains",
  "Больше": "more",
  "Меньше": "less",
};
