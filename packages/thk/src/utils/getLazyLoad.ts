import type { FunctionComponent, LazyExoticComponent } from 'react';
import { lazy } from 'react';

const getLazyLoad = (path: string, time: number): LazyExoticComponent<FunctionComponent> =>
  lazy(() => new Promise(res => setTimeout(res, time)).then(() => import('../components/' + path)));

export default getLazyLoad;
