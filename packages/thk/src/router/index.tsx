import { Navigate, useRoutes } from 'react-router-dom';
import RouterTitle from 'react-router-title';
import HomePage from '@/pages';
import LazyPage from '@/pages/lazy';
import Header from '@/components/layouts/Header';

interface RouterOptions {
  defaultPath?: string;
}

interface RouteType {
  path: string;
  title: string;
  element: JSX.Element;
}

export const setRoutes = ({ defaultPath }: RouterOptions): Array<RouteType> => [
  {
    path: '/',
    title: "Taehyung's Boiler Plate",
    element: defaultPath ? <Navigate replace to={defaultPath} /> : <HomePage />,
  },
  {
    path: '/lazy',
    title: 'Suspense & Lazy Component Test',
    element: <LazyPage />,
  },
];

const Router = (options: RouterOptions): JSX.Element => {
  return (
    <div className="max-w-[1280px] m-auto min-h-[100vh] p">
      <RouterTitle pageTitle="태형의 페이지" routesConfig={setRoutes(options)} />
      {useRoutes(setRoutes(options))}
    </div>
  );
};

export default Router;
