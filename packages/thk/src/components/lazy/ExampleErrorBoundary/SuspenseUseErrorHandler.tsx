import classnames from 'classnames';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '@/components/lazy/fallback/ErrorFallback';
import ErrorChild from '@/components/lazy/ExampleErrorBoundary/ErrorChild';

export default function SuspenseUseErrorHandler(): JSX.Element {
  return (
    <div className={classnames(`inline-flex flex-col justify-center items-center w-[200px] h-[200px] bg-gray-200`)}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <ErrorChild />
      </ErrorBoundary>
    </div>
  );
}
