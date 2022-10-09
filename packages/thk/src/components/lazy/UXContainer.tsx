import SuspenseUX from './SuspenseUX';
import TransitionUX from './TransitionUX';

export default function UXContainer(): JSX.Element {
  return (
    <div className="flex justify-between gap-[20px] w-full border-dark-200 border-2">
      <SuspenseUX />
      <TransitionUX />
    </div>
  );
}
