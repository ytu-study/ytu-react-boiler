import type { FunctionComponent, LazyExoticComponent } from 'react';
import { lazy } from 'react';

const getComp = async (path: string, time = 1000): Promise<{ default: FunctionComponent }> => {
  await new Promise(res => setTimeout(res, time));
  const comp = import(path);
  console.log('comp', comp);
  return comp;
};

export default function (path: string, time?: number): Promise<{ default: FunctionComponent }> {
  return new Promise(res => setTimeout(res, time)).then(() => import(path));
}
