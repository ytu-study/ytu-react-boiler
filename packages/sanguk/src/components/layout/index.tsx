import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { sprinkles } from '@/styles/sprinkles.css';

export default function Layout(): JSX.Element {
  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.add(isDark ? 'dark' : 'light');
  }, []);

  return (
    <div id="layout">
      <div
        className={sprinkles({
          display: 'flex',
          color: 'blue500',
          paddingY: '4',
          width: 'full',
        })}></div>
      <Outlet />
    </div>
  );
}
