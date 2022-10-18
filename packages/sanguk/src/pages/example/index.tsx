import { Outlet } from 'react-router-dom';
import { Article, H1 } from '@/components/common';

export default function Example(): JSX.Element {
  return (
    <Article>
      <H1 fontSize={'4xl'}>Example</H1>
      <Outlet />
    </Article>
  );
}
