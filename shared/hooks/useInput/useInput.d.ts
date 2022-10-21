type UseInputValue = string | number;

interface UseInputOptions {
  initValue?: string;
  validators?: string[];
}

interface UseInputReturns {
  value: ValueType;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
