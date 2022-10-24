const Validators: { [key in ValidatorKey]?: ValidatorValue } = {
  required: {
    isValid: v => !!v,
    errorMessage: '값을 반드시 입력해주세요.',
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
    errorMessage: '한글 또는 영문만 입력해야 합니다.',
  },
};

export default Validators;
