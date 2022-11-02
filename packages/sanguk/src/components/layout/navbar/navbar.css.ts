import { style } from '@vanilla-extract/css';
import { darkColor } from '@/styles/mainColor.css';

export const navbarContainer = style({
  minWidth: 1080,
});

export const navbarGameLinkHeight = style({
  height: 40,
});

export const logoContainer = style({
  paddingLeft: 16.5,
  paddingRight: 16.5,
  backgroundColor: darkColor.main500,
});

export const opggLogoSize = style({
  width: 65,
  height: 16,
});

export const firstGameLink = style({
  ':first-child': {
    paddingRight: 12,
  },
});

export const gameLinkContainer = style([
  navbarGameLinkHeight,
  firstGameLink,
  {
    color: darkColor.gray900,
    backgroundColor: darkColor.main500,
  },
]);

export const gameLink = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 8,
  selectors: {
    [`${firstGameLink}:not(:first-child) &`]: {
      padding: '0 8px',
      margin: 4,
    },
    [`${firstGameLink}:not(:first-child) &:hover`]: {
      backgroundColor: darkColor.main200,
      borderRadius: 4,
    },
  },
});
