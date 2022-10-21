import React from 'react';
import { Link } from 'react-router-dom';
import { setRoutes } from '@/router';

export default function Header(): JSX.Element {
  return (
    <header className="fixed top-0 left-0 right-0 w-full h-[60px] bg-slate-200">
      <div className="flex items-center max-w-[1280px] h-full m-auto">
        {setRoutes({})
          .slice(1)
          .map(({ name, path }) => {
            return (
              <Link to={path} className="mr-[20px] hover:underline hover:font-semibold hover:text-blue-600">
                {name}
              </Link>
            );
          })}
      </div>
    </header>
  );
}
