import React from "react";

import { Table, InnerSelect } from "../../components";

import { TABLE_DATA } from "./mock";
import { TABLE_COLUMNS } from "./constants";

import { Header, FilterInput } from "./styles";

const Home = () => {
  const [field, setField] = React.useState("Все");
  const [condition, setCondition] = React.useState("Содержит");
  const [filterValue, setFilterValue] = React.useState();

  return (
    <div>
      <Header>
        <InnerSelect
          title="Поле"
          options={["Все", "Название", "Количество", "Расстояние"]}
          selected={field}
          onChange={setField}
        />
        <InnerSelect
          title="Условие"
          options={["Равно", "Содержит", "Больше", "Меньше"]}
          selected={condition}
          onChange={setCondition}
        />
        <div>
          <FilterInput
            placeholder="Значение"
            value={filterValue}
            onChange={(e: any) => setFilterValue(e.target.value)}
          />
        </div>
      </Header>
      <Table 
        data={TABLE_DATA}
        columns={TABLE_COLUMNS()}
      />
    </div>
  );
};

export default Home;
