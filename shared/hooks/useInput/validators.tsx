const Validators: { [k: string]: (v: UseInputValue, ...params: number[]) => boolean } = {
  required: v => !!v,
  minLength: (v, l: number) => String(v).length >= l,
  maxLength: (v, l: number) => String(v).length <= l,
  email: v => /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(String(v)),
  KoEn: v => /^[가-힣A-Za-z]$/.test(String(v)),
};

export default Validators;
