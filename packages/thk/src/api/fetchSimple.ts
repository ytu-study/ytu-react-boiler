export function fetchData(isError = false): Promise<string | Error> {
  return new Promise((res, rej) => {
    setTimeout(() => {
      return isError ? rej('API Error!') : res('Data!!');
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
