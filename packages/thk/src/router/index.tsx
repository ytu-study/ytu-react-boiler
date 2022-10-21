import { Navigate, useRoutes } from 'react-router-dom';
import RouterTitle from 'react-router-title';
import HomePage from '@/pages';
import LazyPage from '@/pages/lazy';
import Header from '@/components/layouts/Header';
import InputValidatorPage from '@/pages/input-validator';

interface RouterOptions {
  defaultPath?: string;
}

interface RouteType {
  name: string;
  path: string;
  title: string;
  element: JSX.Element;
}

export const setRoutes = ({ defaultPath }: RouterOptions): Array<RouteType> => [
  {
    name: 'HomePage',
    path: '/',
    title: "Taehyung's Boiler Plate",
    element: defaultPath ? <Navigate replace to={defaultPath} /> : <HomePage />,
  },
  {
    name: 'LazyPage',
    path: '/lazy',
    title: 'Suspense & Lazy Component Test',
    element: <LazyPage />,
  },
  {
    name: 'ValidatorPage',
    path: '/validator',
    title: 'Input Validator',
    element: <InputValidatorPage />,
  },
];

const Router = (options: RouterOptions): JSX.Element => {
  return (
    <div className="max-w-[1280px] m-auto min-h-[100vh] pt-[90px]">
      <RouterTitle pageTitle="태형의 페이지" routesConfig={setRoutes(options)} />
      <Header />
      {useRoutes(setRoutes(options))}
    </div>
  );
};

export default Router;
