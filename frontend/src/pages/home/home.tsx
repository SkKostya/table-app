import React from "react";

import {
  getAllRows,
  createRow,
  nameFilteredRows,
  amountDistanceFilteredRows,
  deleteRow as deleteOneRow
} from "../../helpers/api";
import { MATH_RANDOM } from "../../helpers/math-random";

import { Table, InnerSelect } from "../../components";

// import { TABLE_DATA } from "./mock";
import { TABLE_COLUMNS, NAMES, FIELDS, OPERATORS } from "./constants";

import { Header, FilterInput, Footer, PageButton, Wrapper } from "./styles";

const ITEMS_ON_PAGE = 5;

const Home = () => {
  const [field, setField] = React.useState("Все");
  const [condition, setCondition] = React.useState("Содержит");
  const [filterValue, setFilterValue] = React.useState("");

  const [tableData, setTableData] = React.useState<any>([]);
  const [page, setPage] = React.useState(0);

  const currentData = [...tableData].splice((page * ITEMS_ON_PAGE), ITEMS_ON_PAGE);
  const pagination = new Array(Math.ceil(tableData.length / ITEMS_ON_PAGE)).fill(1);

  React.useEffect(() => {
    const data = async () => {
      const { data } = await getAllRows();
      setTableData(data);
    }

    data();
  }, [condition]);

  const CreateRow = async () => {
    const { data } = await createRow({
      name: NAMES[MATH_RANDOM(0, 2)],
      amount: MATH_RANDOM(1000, 2000),
      distance: MATH_RANDOM(10, 20)
    });
    
    setTableData([...tableData, data]);
  };

  const handleFiltered = async () => {
    const type = FIELDS[field];

    if(type === "all") {
      const { data } = await getAllRows();
      setTableData(data);
    } else if(type === "name") {
      const { data } = await nameFilteredRows(filterValue);
      setTableData(data);
    } else {
      const { data } = await amountDistanceFilteredRows({
        type,
        operator: OPERATORS[condition],
        value: filterValue
      });
      setTableData(data);
    }
  };

  const deleteRow = async (id: number) => {
    await deleteOneRow(id);

    handleFiltered();
  };

  return (
    <Wrapper>
      <Header>
        <button onClick={CreateRow}>Add Row</button>
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
        <button onClick={handleFiltered}>Фильтровать</button>
      </Header>
      {!!tableData.length
        ? <>
            <Table
              data={currentData}
              columns={TABLE_COLUMNS(deleteRow)}
            />
            <Footer>
              {pagination.map((item, i) =>
                <PageButton isActive={i === page} onClick={() => setPage(i)} key={i}>{i + 1}</PageButton>
              )}
            </Footer>
          </>
        : <h2 style={{ marginTop: "40px", textAlign: "center" }}>Нет данных</h2>
      }
    </Wrapper>
  );
};

export default Home;
