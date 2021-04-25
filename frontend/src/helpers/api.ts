import axios from "axios";

const SERVER_URL = "http://localhost:8080";

export const getAllRows = () => {
  return axios.get(`${SERVER_URL}/rows`);
};

interface ICreate {
  name: string;
  amount: number;
  distance: number;
};

export const createRow = ({ name, amount, distance }: ICreate) => {
  return axios({
    method: 'post',
    url: `${SERVER_URL}/create-row`,
    headers: {},
    data: { name, amount, distance }
  });
};

export const nameFilteredRows = (name: string) => {
  if(name === "") {
    return axios.get(`${SERVER_URL}/rows`);
  }
  return axios.get(`${SERVER_URL}/row/name/${name}`);
};

interface IAmountDistance {
  type: string;
  operator: string;
  value: string;
};

export const amountDistanceFilteredRows = ({ type, operator, value }: IAmountDistance) => {
  if(value === "" || !(Number(value))) {
    return axios.get(`${SERVER_URL}/rows`);
  }
  return axios.get(`${SERVER_URL}/rows/${type}/${operator}/${value}`)
};

export const deleteRow = (id: number) => {
  return axios.delete(`${SERVER_URL}/row/${id}`);
};
