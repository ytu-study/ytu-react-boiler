import { Outlet } from 'react-router-dom';
import { Main } from '@/components/common';
import Navbar from '@/components/layout/navbar';

export default function Layout(): JSX.Element {
  return (
    <>
      <Navbar />
      <Main id="layout" display="flex" width="full">
        <Outlet />
      </Main>
    </>
  );
}
