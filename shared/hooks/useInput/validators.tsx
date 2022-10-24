type ValidatorKey = 'required' | 'minLength' | 'maxLength' | 'email' | 'KoEn';

interface ValidatorValue {
  isValid: (v: UseInputValue, ...params: number[]) => boolean;
  errorMessage: string;
}

const Validators: { [key in ValidatorKey]?: ValidatorValue } = {
  required: {
    isValid: v => !!v,
    errorMessage: '',
  },
  minLength: {
    isValid: (v, l: number) => String(v).length >= l,
    errorMessage: '',
  },
  maxLength: {
    isValid: (v, l: number) => String(v).length <= l,
    errorMessage: '',
  },
  email: {
    isValid: v => /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(String(v)),
    errorMessage: '',
  },
  KoEn: {
    isValid: v => /^[가-힣A-Za-z]$/.test(String(v)),
    errorMessage: '',
  },
};

export default Validators;
