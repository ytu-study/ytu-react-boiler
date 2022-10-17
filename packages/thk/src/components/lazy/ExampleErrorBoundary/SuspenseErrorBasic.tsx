import React, { useState } from 'react';
import classnames from 'classnames';
import ErrorBoundaryContainer from './ErrorBoundaryContainer';
import SuspenseChild from '@/components/lazy/SuspenseChild';

export default function SuspenseErrorBasic(): JSX.Element {
  const [toggleError, setToggleError] = useState<boolean>(true);

  return (
    <div className={classnames(`inline-flex w-[200px] h-[200px] bg-gray-200`)}>
      <ErrorBoundaryContainer onReset={() => setToggleError(prev => !prev)}>
        <SuspenseChild isError={toggleError} color="bg-purple-400" />
      </ErrorBoundaryContainer>
    </div>
  );
}
