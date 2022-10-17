import { lazy, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useQueryErrorResetBoundary, QueryErrorResetBoundary } from '@tanstack/react-query';
import RQChild from '@/components/lazy/ExampleReactQuery/RQTodo';
import CommonFallback from '@/components/lazy/fallback/CommonFallback';
import RQError from '@/components/lazy/ExampleReactQuery/RQError';
import ErrorFallback from '@/components/lazy/fallback/ErrorFallback';

const RQBeer = lazy(() => import('./RQBeer'));

export default function SuspenseReactQuery(): JSX.Element {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <div className="flex gap-[20px]">
      {/* React Query + Suspense Good예시 */}
      <div className="w-[200px] h-[200px] bg-slate-200">
        <Suspense fallback={<CommonFallback color="bg-lime-400" />}>
          <RQChild />
        </Suspense>
      </div>

      {/* React Query + Suspense Bad예시 */}
      <div className="w-[200px] h-[200px] bg-slate-200">
        <Suspense fallback={<CommonFallback color="bg-amber-400" />}>
          <RQBeer />
        </Suspense>
      </div>

      {/* React Query + Error Boundary 예시 #1 */}
      <div className="w-[200px] h-[200px] bg-slate-200">
        <ErrorBoundary onReset={reset} FallbackComponent={ErrorFallback}>
          <Suspense fallback={<CommonFallback color="bg-rose-400" />}>
            <RQError />
          </Suspense>
        </ErrorBoundary>
      </div>

      {/* React Query + Error Boundary 예시 #2 */}
      <div className="w-[200px] h-[200px] bg-slate-200">
        <QueryErrorResetBoundary>
          {({ reset }) => (
            <ErrorBoundary onReset={reset} FallbackComponent={ErrorFallback}>
              <Suspense fallback={<CommonFallback color="bg-rose-400" />}>
                <RQError />
              </Suspense>
            </ErrorBoundary>
          )}
        </QueryErrorResetBoundary>
      </div>
    </div>
  );
}
