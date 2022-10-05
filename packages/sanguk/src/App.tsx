import { RouterProvider } from 'react-router-dom';
import router from '@/router';
import './styles/index.css';

export default function App(): JSX.Element {
  return <RouterProvider router={router} />;
}
