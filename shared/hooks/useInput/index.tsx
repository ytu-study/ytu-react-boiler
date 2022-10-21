import { useState, useCallback } from 'react';

const useInput = ({ initValue }: UseInputOptions): UseInputReturns => {
  const [value, setValue] = useState<UseInputValue>(initValue || '');
  const [valid, setValid] = useState(0);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setValue(value);
  }, []);

  return { value, onChange };
};

export default useInput;
