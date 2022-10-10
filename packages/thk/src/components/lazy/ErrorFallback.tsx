import type { FallbackProps } from 'react-error-boundary';

interface Props extends FallbackProps {
  handleReset: () => void;
}

export default function ErrorFallback({ error, resetErrorBoundary, handleReset }: Props): JSX.Element {
  const onClickReset = () => {
    handleReset();
    resetErrorBoundary();
  };
  return (
    <div className="w-full p-[15px] bg-red-100 border-red-200 border-[1px] text-center">
      <p>Error: {error || 'Undefined Error'}</p>
      <button className="inline-block mt-[20px] px-[15px] py-[5px] border-black border-[1px] rounded-[4px]" onClick={onClickReset}>
        reset
      </button>
    </div>
  );
}
