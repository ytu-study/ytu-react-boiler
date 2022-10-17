import ExampleDeferredValue from '@/components/lazy/ExampleDeferredValue';
import ExampleErrorBoundary from '@/components/lazy/ExampleErrorBoundary';
import ExampleReactQuery from '@/components/lazy/ExampleReactQuery';
import ExampleSuspenseBasic from '@/components/lazy/ExampleSuspenseBasic';
import ExampleSuspenseList from '@/components/lazy/ExampleSuspenseList';
import ExampleTransition from '@/components/lazy/ExampleTransition';
import ExampleUXs from '@/components/lazy/ExampleUXs';

export default function LazyPage(): JSX.Element {
  return (
    <div className="flex flex-col p-[40px] [&>div]:w-full [&>div]:h-[200px] [&>div]:border-dark-200 [&>div]:border-2">
      <h2 className="mt-[30px] mb-[8px] text-[20px] font-bold">Example: SuspenseBasic</h2>
      <ExampleSuspenseBasic />
      <h2 className="mt-[30px] mb-[8px] text-[20px] font-bold">Example: SuspenseList</h2>
      <ExampleSuspenseList />
      <h2 className="mt-[30px] mb-[8px] text-[20px] font-bold">Example: ErrorBoundary</h2>
      <ExampleErrorBoundary />
      <h2 className="mt-[30px] mb-[8px] text-[20px] font-bold">Example: ReactQuery</h2>
      <ExampleReactQuery />
      <h2 className="mt-[30px] mb-[8px] text-[20px] font-bold">Example: Transition</h2>
      <ExampleTransition />
      <h2 className="mt-[30px] mb-[8px] text-[20px] font-bold">Example: UXs</h2>
      <ExampleUXs />
      <h2 className="mt-[30px] mb-[8px] text-[20px] font-bold">Example: DeferredValue</h2>
      <ExampleDeferredValue />
    </div>
  );
}
