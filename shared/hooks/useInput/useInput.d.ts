type UseInputValue = string | number;

interface UseInputOptions {
  initValue?: string;
  validators?: string[];
}

interface UseInputReturns {
  value: ValueType;
  validation: object;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

type ValidatorKey = 'required' | 'minLength' | 'maxLength' | 'email' | 'KoEn';

interface ValidatorValue {
  isValid: (v: UseInputValue, ...params: number[]) => boolean;
  errorMessage: string;
}
