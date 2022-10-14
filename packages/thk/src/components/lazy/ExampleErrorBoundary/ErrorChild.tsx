import { useState } from 'react';
import { useErrorHandler } from 'react-error-boundary';

function fetchError(isError = true): Promise<string | Error> {
  return new Promise((res, rej) => {
    setTimeout(() => {
      return isError ? rej('API Error!') : res('No Error~');
    }, 1000);
  });
}

export default function ErrorChild(): JSX.Element {
  const [value, setValue] = useState<string>('No Value');
  const errorHandler = useErrorHandler();

  const triggerApi = async () => {
    try {
      const res = await fetchError();
      setValue(res);
    } catch (e) {
      errorHandler(e);
    }
  };

  return (
    <>
      <p className="mb-[10px] font-bold">value: {value}</p>
      <button className="p-[5px] border-black border-[1px] rounded-[4px]" onClick={triggerApi}>
        Trigger
      </button>
    </>
  );
}
