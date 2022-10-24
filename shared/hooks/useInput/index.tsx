import { useState, useCallback, useEffect } from 'react';
import Validators from './validators';

const useInput = ({ initValue, validators }: UseInputOptions): UseInputReturns => {
  const [value, setValue] = useState<UseInputValue>(initValue || '');
  const [validation, setValidation] = useState<object>({ valid: false, errorMessage: '' });

  useEffect(() => {
    try {
      if (validators?.length) {
        for (const validKey of validators) {
          const { isValid, errorMessage } = Validators[validKey as ValidatorKey] as ValidatorValue;
          if (!isValid(value)) throw errorMessage;
        }
        setValidation({ validation: true, errorMessage: '' });
      }
    } catch (errorMessage) {
      setValidation({ validation: false, errorMessage });
    }
  }, [value]);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    setValue(v);
  }, []);

  return { value, onChange, validation };
};

export default useInput;
