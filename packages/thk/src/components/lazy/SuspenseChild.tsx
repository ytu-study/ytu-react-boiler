import React, { Suspense } from 'react';
import type { PropsWithChildren } from 'react';
import classnames from 'classnames';
import getLazyLoad from '@/utils/getLazyLoad';
import CommonFallback from '@/components/lazy/CommonFallback';

interface Props {
  width?: string;
  color?: string;
  time?: number;
}

export default function SuspenseChild({ children, width = '200px', color, time = 1000 }: PropsWithChildren<Props>): JSX.Element {
  const SuspenseBaby = getLazyLoad('lazy/SuspenseBaby', time);

  return (
    <div className={classnames(`w-[${width}] h-[200px] border-dark-900 border-2`)}>
      <Suspense fallback={<CommonFallback color={color} />}>
        <SuspenseBaby />
        {children}
      </Suspense>
    </div>
  );
}
