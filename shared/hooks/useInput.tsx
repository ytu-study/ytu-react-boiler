import { useState, useCallback } from 'react';

interface Options {
  initValue?: string;
  validators?: string[];
}

interface Returns {
  // value: string;
  setValue: (value: string) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const useInput = ({ initValue }: Options): Returns => {
  const [value, setValue] = useState<string>(initValue || '');
  const [valid, setValid] = useState(0);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setValue(value);
  }, []);

  return { setValue, onChange };
};

export default useInput;
