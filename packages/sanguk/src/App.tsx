import { RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import router from '@/router';
import './styles/reset.css';

export default function App(): JSX.Element {
  return (
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  );
}
