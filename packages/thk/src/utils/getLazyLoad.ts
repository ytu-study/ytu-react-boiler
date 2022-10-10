import type { FunctionComponent, LazyExoticComponent } from 'react';
import { lazy } from 'react';

const getLazyLoad = (path: string, time: number, isError = false): LazyExoticComponent<FunctionComponent> =>
  lazy(() =>
    new Promise((res, rej) => {
      if (isError) setTimeout(rej, time);
      else setTimeout(res, time);
    }).then(() => import('../components/' + path)),
  );

export default getLazyLoad;
