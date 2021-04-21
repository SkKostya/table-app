import React from "react";
import moment from "moment";

export const TABLE_COLUMNS = () => [
  {
    key: "date",
    width: "25%",
    label: "Дата",
    render: (rowItem: any) => (
      <React.Fragment>
        <div>
          {moment(rowItem.date).format("YYYY.MM.DD hh:mm")}
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
    width: "12.5%",
    label: "Количество",
    render: (rowItem: any) => (
      <React.Fragment>
        <div>{rowItem.amount}</div>
      </React.Fragment>
    )
  },
  {
    key: "distance",
    width: "12.5%",
    label: "Расстояние",
    render: (rowItem: any) => (
      <React.Fragment>
        <div>{rowItem.distance}</div>
      </React.Fragment>
    )
  },
];
