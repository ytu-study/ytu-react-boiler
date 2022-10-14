import React, { useState } from 'react';
import classnames from 'classnames';
import { useErrorHandler } from 'react-error-boundary';
import ErrorBoundaryContainer from './ErrorBoundaryContainer';
import SuspenseChild from '@/components/lazy/SuspenseChild';
import getLazyLoad from '@/utils/getLazyLoad';

export default function SuspenseUseErrorHandler(): JSX.Element {
  const handleError = useErrorHandler();

  const triggerError = async () => {
    await new Promise((_, rej) => rej());
  };

  return (
    <div className={classnames(`inline-flex w-[200px] h-[200px] bg-gray-200`)}>
      <SuspenseChild color="bg-sky-500" />
      <button onClick={triggerError}>Trigger Error</button>
    </div>
  );
}
