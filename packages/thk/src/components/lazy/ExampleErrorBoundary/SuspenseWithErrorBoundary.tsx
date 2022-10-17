import { withErrorBoundary } from 'react-error-boundary';
import type { ComponentType, FunctionComponent } from 'react';
import ErrorFallback from '../fallback/ErrorFallback';
import SuspenseChild from '@/components/lazy/SuspenseChild';

const SuspenseWithErrorBoundary = (): ComponentType =>
  withErrorBoundary(() => <SuspenseChild isError={true} />, {
    FallbackComponent: ErrorFallback,
    // onError: (error, info) => console.log(`withErrorBoundary Error: ${error}, ${info}`),
  });

export default SuspenseWithErrorBoundary();
