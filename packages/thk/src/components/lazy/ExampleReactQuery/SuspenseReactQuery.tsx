import { Suspense } from 'react';
import RQChild from '@/components/lazy/ExampleReactQuery/RQChild';

export default function SuspenseReactQuery(): JSX.Element {
  return (
    <div>
      <Suspense fallback={<h2>Loading...</h2>}>
        <RQChild />
      </Suspense>
    </div>
  );
}
