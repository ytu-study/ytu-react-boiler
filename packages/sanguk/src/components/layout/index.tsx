import { Outlet } from 'react-router-dom';

export default function Layout(): JSX.Element {
  return (
    <div id="layout">
      <Outlet />
    </div>
  );
}
