import classNames from 'classnames';
import type { PropsWithChildren } from 'react';
import { NavLink } from 'react-router-dom';
import { Img, Li, Span } from '@/components/common';
import { gameLink, gameLinkContainer } from '@/components/layout/navbar/navbar.css';
import { flex } from '@/styles/recipe.css';

type NavbarGameLinkProps = {
  to: string;
  image: string;
  active?: boolean;
};

export default function NavbarGameLink({ to, image, active, children }: PropsWithChildren<NavbarGameLinkProps>): JSX.Element {
  return (
    // <Li display="flex" alignItems="center" backgroundColor={active ? 'main500' : null} pr={active ? '3' : null} className={gameLinkContainer}>
    <li className={classNames([flex({ center: true })])}>
      <NavLink to={to} className={gameLink}>
        <Img src={image} w="6" h="6" />
        <Span fontSize="xs" lineHeight="8">
          {children}
        </Span>
      </NavLink>
    </li>
    // </Li>
  );
}
