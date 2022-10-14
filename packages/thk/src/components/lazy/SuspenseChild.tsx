import { Suspense } from 'react';
import type { PropsWithChildren } from 'react';
import classnames from 'classnames';
import getLazyLoad from '@/utils/getLazyLoad';
import CommonFallback from '@/components/lazy/fallback/CommonFallback';

interface Props {
  isError?: boolean;
  width?: string;
  color?: string;
  time?: number;
}

export default function SuspenseChild({ children, isError = false, width = 'w-[200px]', color, time = 1000 }: PropsWithChildren<Props>): JSX.Element {
  const SuspenseBaby = getLazyLoad('lazy/SuspenseBaby', time, isError);

  return (
    <div className={classnames(`inline-flex ${width} h-[200px] bg-gray-200`)}>
      <Suspense fallback={<CommonFallback color={color} />}>
        <SuspenseBaby time={time} />
        {children}
      </Suspense>
    </div>
  );
}
