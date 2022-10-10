import { SuspenseList } from 'react';
import SuspenseChild from './SuspenseChild';

export default function ExampleSuspenseList(): JSX.Element {
  return (
    <div className="flex gap-[20px]">
      {/* - revelOrder: forwards, backwards, together */}
      {/* - tail: null, collapsed, hidden */}
      <SuspenseList revealOrder="forwards">
        <SuspenseChild time={400} />
        <SuspenseChild time={1000} color="bg-orange-500" />
        <SuspenseChild time={700} color="bg-yellow-500" />
      </SuspenseList>
    </div>
  );
}
