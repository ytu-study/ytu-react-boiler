import type { PropsWithChildren } from 'react';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { themeState } from '@/store';
import Box from '@/components/Box';

export default function Header({ children }: PropsWithChildren): JSX.Element {
  const [theme, setTheme] = useRecoilState(themeState);

  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(isDark ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <Box tag="header" display="flex">
      <Box tag="button" display="inline-flex" marginLeft="auto" paddingX="2" paddingY="2" onClick={toggleTheme}>
        theme: {theme}
      </Box>
    </Box>
  );
}
