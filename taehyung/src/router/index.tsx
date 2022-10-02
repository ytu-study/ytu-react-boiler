import { Navigate, useRoutes } from "react-router-dom";
import HomePage from "../pages";
import LazyPage from "../pages/lazy";

interface RouterOptions {
  defaultPath?: string;
}

const setRoutes = ({ defaultPath }: RouterOptions) => [
  {
    path: "/",
    title: "Taehyung's Boiler Plate",
    element: defaultPath ? <Navigate replace to={defaultPath} /> : <HomePage />,
  },
  {
    path: "/lazy",
    title: "Suspense & Lazy Component Test",
    element: <LazyPage />,
  },
];

const Router = (options: RouterOptions) => {
  return <div>{useRoutes(setRoutes(options))}</div>;
};

export default Router;
