import React, { Suspense, lazy } from 'react';
import CommonFallback from '@/components/lazy/CommonFallback';

const LazyChild = lazy(async () => {
  await new Promise(res => setTimeout(res, 1000));
  return import('../../components/lazy/LazyChild');
});

export default function LazyPage(): JSX.Element {
  return (
    <div>
      <Suspense fallback={<CommonFallback />}>
        <LazyChild />
      </Suspense>
    </div>
  );
}
