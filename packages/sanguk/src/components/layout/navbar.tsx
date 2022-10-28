import type { PropsWithChildren } from 'react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { Button, Header, Span } from '@/components/common';
import { themeState } from '@/store';

export default function Navbar({ children }: PropsWithChildren): JSX.Element {
  const [theme, setTheme] = useRecoilState(themeState);

  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(isDark ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <Header display={'flex'} flexDirection={'column'}>
      <Button display={'inline-flex'} ml={'auto'} px={'2'} py={'2'} borderT={'0'} roundedT={'full'} onClick={toggleTheme}>
        <Span backgroundColor={'main200'}>theme: {theme}</Span>
      </Button>
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/example/recipes">Example Recipes</NavLink>
    </Header>
  );
}
