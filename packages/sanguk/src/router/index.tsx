import { createBrowserRouter } from 'react-router-dom';
import Layout from '@/components/layout';
import Index from '@/pages';

const router = createBrowserRouter([
  {
    id: 'layout',
    path: '/',
    element: <Layout />,
    children: [
      {
        id: 'index',
        index: true,
        element: <Index />,
      },
    ],
  },
]);

export default router;
