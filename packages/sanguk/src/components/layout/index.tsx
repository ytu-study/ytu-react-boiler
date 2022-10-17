import { Outlet } from 'react-router-dom';
import { Main } from '@/components/common';
import Gnb from '@/components/layout/gnb';

export default function Layout(): JSX.Element {
  return (
    <>
      <Gnb />
      <Main id="layout" display="flex" width="full">
        <Outlet />
      </Main>
    </>
  );
}
