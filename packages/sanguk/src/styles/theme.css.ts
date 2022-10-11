import { createGlobalTheme } from '@vanilla-extract/css';
import { darkColor, lightColor } from '@/styles/mainColor.css';

export const darkThemeVars = createGlobalTheme(':root.dark', darkColor);
export const lightThemeVars = createGlobalTheme(':root.light', lightColor);
