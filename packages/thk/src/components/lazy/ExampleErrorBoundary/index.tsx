import SuspenseWithErrorBoundary from './SuspenseWithErrorBoundary';
import SuspenseErrorBasic from './SuspenseErrorBasic';
import SuspenseUseErrorHandler from './SuspenseUseErrorHandler';

export default function ExampleErrorBoundary(): JSX.Element {
  return (
    <div className="flex gap-[20px]">
      <SuspenseErrorBasic />
      <SuspenseWithErrorBoundary />
      <SuspenseUseErrorHandler />
    </div>
  );
}
