import axios from 'axios';

interface TodoItem {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

const sleep = (ms = 2000) => {
  return new Promise(res => setTimeout(res, ms));
};

interface BeerItem {
  id: number;
  uid: string;
  brand: string;
  name: string;
  style: string;
  hop: string;
  yeast: string;
  malts: string;
  ibu: string;
  alcohol: string;
  blg: string;
}

export async function fetchTodo(id: number): Promise<TodoItem> {
  await sleep();
  const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res => res?.data);
  return res;
}

export async function fetchBeer(): Promise<BeerItem> {
  await sleep();
  const res = await axios.get(`https://random-data-api.com/api/v2/beers`).then(res => res?.data);
  return res;
}

export function fetchData(isError = false): Promise<number | Error> {
  const date = new Date().getMilliseconds();
  return new Promise((res, rej) => {
    setTimeout(() => {
      return isError ? rej('API Error!') : res(date);
    }, 1000);
  });
}

export function fetchError(isError = true, context = 'API Error!'): Promise<string | Error> {
  return new Promise((res, rej) => {
    setTimeout(() => {
      return isError ? rej(context) : res('No Error~');
    }, 1000);
  });
}
