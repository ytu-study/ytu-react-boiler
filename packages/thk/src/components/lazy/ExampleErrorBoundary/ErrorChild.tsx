import { useState } from 'react';
import { useErrorHandler } from 'react-error-boundary';
import { fetchError } from '@/api/fetchSimple';

export default function ErrorChild(): JSX.Element {
  const [value, setValue] = useState<string>('No Value');
  const errorHandler = useErrorHandler();

  const triggerApi = async () => {
    try {
      const res = await fetchError(true, 'Triggered Error!');
      setValue(res as string);
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
