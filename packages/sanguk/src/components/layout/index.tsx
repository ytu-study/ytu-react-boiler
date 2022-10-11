import { Outlet } from 'react-router-dom';
import Box from '@/components/Box';
import Header from '@/components/layout/header';

export default function Layout(): JSX.Element {
  return (
    <>
      <Header />
      <Box id="layout" display="flex" width="full">
        <Outlet />
      </Box>
    </>
  );
}
