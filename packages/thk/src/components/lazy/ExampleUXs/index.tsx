import SuspenseUX from './SuspenseUX';
import TransitionUX from './TransitionUX';

export default function ExampleUXs(): JSX.Element {
  return (
    <div className="flex justify-between gap-[20px]">
      <SuspenseUX />
      <TransitionUX />
    </div>
  );
}
