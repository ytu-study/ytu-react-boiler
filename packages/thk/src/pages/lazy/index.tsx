import React, { Suspense, lazy, useState } from 'react';
import CommonFallback from '@/components/lazy/CommonFallback';
import setLazyComp from '@/utils/setLazyComp';

const LazyChild = lazy(() => new Promise(res => setTimeout(res, 1000)).then(() => import('../../components/lazy/LazyChild')));

export default function LazyPage(): JSX.Element {
  return (
    <div className="py-[40px]">
      <Suspense fallback={<CommonFallback />}>
        <LazyChild />
      </Suspense>
    </div>
  );
}
