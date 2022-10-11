import type { AtomEffect } from 'recoil';
import { atom } from 'recoil';

export type Theme = 'dark' | 'light';
const themeEffect = ({ onSet }: Parameters<AtomEffect<Theme>>[0]) => {
  onSet((newValue, oldValue) => {
    const rootClass = document.documentElement.classList;
    rootClass.remove(oldValue as Theme);
    rootClass.add(newValue);
  });
};

export const themeState = atom<Theme>({
  key: 'themeState',
  default: 'dark',
  effects: [themeEffect],
});
