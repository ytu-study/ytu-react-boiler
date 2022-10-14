import type { FallbackProps } from 'react-error-boundary';

export default function ErrorFallback({ error, resetErrorBoundary }: FallbackProps): JSX.Element {
  return (
    <div className="w-[200px] p-[15px] bg-red-100 border-red-200 border-[1px] text-center">
      <p>Error: {error || 'Undefined Error'}</p>
      <button className="inline-block mt-[20px] px-[15px] py-[5px] border-black border-[1px] rounded-[4px]" onClick={resetErrorBoundary}>
        reset
      </button>
    </div>
  );
}
