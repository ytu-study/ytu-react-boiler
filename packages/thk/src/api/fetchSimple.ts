import axios from 'axios';

export async function fetchDrink(): Promise<object> {
  const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
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

export function fetchError(isError = true): Promise<string | Error> {
  return new Promise((res, rej) => {
    setTimeout(() => {
      return isError ? rej('API Error!') : res('No Error~');
    }, 1000);
  });
}
