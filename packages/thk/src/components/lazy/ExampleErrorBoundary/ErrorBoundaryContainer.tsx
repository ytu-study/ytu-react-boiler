import type { PropsWithChildren } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '@/components/lazy/fallback/ErrorFallback';

interface Props {
  onError?: (error: Error) => void;
  onReset?: () => void;
}

export default function ErrorBoundaryContainer({ children, onError, onReset }: PropsWithChildren<Props>): JSX.Element {
  return (
    <div className="flex w-[200px] h-[200px] bg-gray-200">
      <ErrorBoundary FallbackComponent={ErrorFallback} onError={onError} onReset={onReset}>
        {children}
      </ErrorBoundary>
    </div>
  );
}
