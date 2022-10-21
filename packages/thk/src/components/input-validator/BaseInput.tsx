import useInput from '../../../../../shared/hooks/useInput';

export default function BaseInput(): JSX.Element {
  const { value } = useInput({});

  return <input value={value} className="px-[10px] py-[3px] border-gray border-[1px] rounded-[4px]" />;
}
