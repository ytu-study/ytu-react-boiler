import React, { useState, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import type { PropsWithChildren } from 'react';
import classnames from 'classnames';
import ErrorFallback from './fallback/ErrorFallback';
import getLazyLoad from '@/utils/getLazyLoad';
import CommonFallback from '@/components/lazy/fallback/CommonFallback';

interface Props {
  isError?: boolean;
  width?: string;
  color?: string;
  time?: number;
}

export default function SuspenseChild({ children, isError, width = 'w-[200px]', color, time = 1000 }: PropsWithChildren<Props>): JSX.Element {
  const [toggleError, setToggleError] = useState<boolean>(isError || false);
  const SuspenseBaby = getLazyLoad('lazy/SuspenseBaby', time, toggleError);

  const changeError = () => {
    setToggleError(prev => !prev);
  };

  return (
    <div className={classnames(`inline-flex ${width} h-[200px] bg-gray-200`)}>
      {/* <ErrorBoundary FallbackComponent={ErrorFallback}/> */}
      <ErrorBoundary FallbackComponent={fallbackProps => <ErrorFallback {...fallbackProps} handleReset={changeError} />}>
        <Suspense fallback={<CommonFallback color={color} />}>
          <SuspenseBaby time={time} />
          {children}
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
