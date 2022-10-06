import React, { Suspense, lazy, type LazyExoticComponent, type FunctionComponent } from 'react';
import getLazyLoad from '@/utils/getLazyLoad';
import CommonFallback from '@/components/lazy/CommonFallback';
import TransitionExample from '@/components/lazy/TransitionExample';

const LazyChild = getLazyLoad('lazy/LazyChild', 1000);
const LazyChild2 = getLazyLoad('lazy/LazyChild', 3000);

export default function LazyPage(): JSX.Element {
  return (
    <div className="flex flex-wrap gap-[20px] py-[40px]">
      <Suspense fallback={<CommonFallback />}>
        <LazyChild />
      </Suspense>
      <Suspense fallback={<CommonFallback color="bg-blue-500" />}>
        <LazyChild2 />
      </Suspense>
      <TransitionExample />
    </div>
  );
}
