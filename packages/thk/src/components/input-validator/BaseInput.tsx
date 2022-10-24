import useInput from '../../../../../shared/hooks/useInput';

export default function BaseInput(): JSX.Element {
  const { value, onChange, validation } = useInput({ validators: ['required', 'KoEn'] });

  return (
    <div>
      <input value={value} onChange={onChange} className="px-[10px] py-[3px] border-gray border-[1px] rounded-[4px]" />
      <span className="text-orange-500">{validation.errorMessage}</span>
    </div>
  );
}
