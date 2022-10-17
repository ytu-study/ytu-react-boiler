import { createGlobalTheme, createGlobalThemeContract } from '@vanilla-extract/css';
import { darkColor, lightColor } from '@/styles/mainColor.css';

export const themeColors = createGlobalThemeContract(darkColor, (_value, path) => `${path.join('')}`);
createGlobalTheme(':root.dark', themeColors, darkColor);
createGlobalTheme(':root.light', themeColors, lightColor);
