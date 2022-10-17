import type { PropsWithChildren } from 'react';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { themeColors } from '@/styles/theme.css';
import { Button, Header, Span } from '@/components/common';
import { themeState } from '@/store';

export default function Gnb({ children }: PropsWithChildren): JSX.Element {
  const [theme, setTheme] = useRecoilState(themeState);

  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(isDark ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <Header display="flex">
      <Button display="inline-flex" ml="auto" px="2" py="2" borderT="0" roundedT="full" onClick={toggleTheme}>
        <Span backgroundColor={themeColors.main200}>theme: {theme}</Span>
      </Button>
    </Header>
  );
}
