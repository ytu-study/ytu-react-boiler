import { Navigate, useRoutes } from 'react-router-dom';
import RouterTitle from 'react-router-title';
import HomePage from '@/pages';
import LazyPage from '@/pages/lazy';

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
    <div>
      <RouterTitle pageTitle="태형의 페이지" routesConfig={setRoutes(options)} />
      {useRoutes(setRoutes(options))}
    </div>
  );
};

export default Router;
