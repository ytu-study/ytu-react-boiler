import React, { Suspense, lazy } from 'react';

const LazyChild = lazy(async () => {
  await new Promise(res => setTimeout(res, 1000));
  return import('../../components/lazy/LazyChild');
});

export default function LazyPage(): JSX.Element {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyChild />
      </Suspense>
    </div>
  );
}
