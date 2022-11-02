import type { PropsWithChildren } from 'react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { Button, Div, H1, Header, Img, Li, Nav, Span, Ul } from '@/components/common';
import { logoContainer, navbarContainer, navbarGameLinkHeight, opggLogoSize } from '@/components/layout/navbar/navbar.css';
import NavbarGameLink from '@/components/layout/navbar/navbarGameLink';
import { themeState } from '@/store';

export default function Navbar({ children }: PropsWithChildren): JSX.Element {
  const [theme, setTheme] = useRecoilState(themeState);
  const isDark = theme === 'dark';

  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(isDark ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => setTheme(isDark ? 'light' : 'dark');

  const links = [
    { path: '/', name: '리그오브레전드', image: '/img-navi-lol-white.svg', active: true },
    { path: '/', name: '데스크톱', image: '/01-icon-00-logo-icon-opggsquare.svg', active: false },
    { path: '/', name: '발로란트', image: '/img-navi-valorant-white.svg', active: false },
    { path: '/', name: '배틀그라운드', image: '/img-navi-pubg-gray.svg', active: false },
    { path: '/', name: '오버워치', image: '/img-navi-overwatch-gray.svg', active: false },
    { path: '/', name: '이터널리턴', image: '/img_navi_bs.svg', active: false },
  ];

  return (
    <Header className={navbarContainer}>
      <Div display="flex" alignItems="center" position="relative" backgroundColor="main100" className={navbarGameLinkHeight}>
        <H1 h="full" display="flex" alignItems="center" className={logoContainer}>
          <NavLink to="/">
            <Img src="/opgglogo.svg" className={opggLogoSize} />
          </NavLink>
        </H1>
        <Nav flexGrow="1">
          <Ul display="flex" flexWrap="wrap" overflow="hidden" className={navbarGameLinkHeight}>
            {links.map(({ path, image, name, active }) => (
              <NavbarGameLink to={path} image={image} active={active}>
                {name}
              </NavbarGameLink>
            ))}
          </Ul>
        </Nav>
        {/* <Button position="relative" w="6" h="6"> */}
        {/*  <Img src="/icon-more.svg" /> */}
        {/* </Button> */}
        <Button onClick={toggleTheme}>
          <Img src={isDark ? '/icon-darkmode.svg' : '/icon-lightMode.svg'} />
        </Button>
      </Div>
    </Header>
  );
}
