import { createBrowserRouter } from 'react-router-dom';
import Example from '@/pages/example';
import Recipes from '@/pages/example/recipes';
import Layout from '@/components/layout';
import Index from '@/pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: 'example',
        element: <Example />,
        children: [
          {
            path: 'recipes',
            element: <Recipes />,
          },
        ],
      },
    ],
  },
]);

export default router;
