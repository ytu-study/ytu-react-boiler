import { size } from '@/styles/size.css';

export const display = ['none', 'flex', 'block', 'inline', 'inline-flex'] as const;

export const overflow = ['hidden', 'auto', 'clip', 'visible', 'scroll'] as const;

export const textAlign = ['left', 'center', 'right', 'justify', 'start', 'end'] as const;

export const objectFit = ['contain', 'cover', 'fill', 'none', 'scale-down'] as const;

export const spaceContent = ['space-around', 'space-between', 'space-evenly'] as const;

export const flexContent = ['flex-start', 'center', 'flex-end'] as const;

export const content = ['start', 'center', 'end'] as const;

export const zIndex = {
  '0': 0,
  '10': 10,
  '20': 20,
  '30': 30,
  '40': 40,
  '50': 50,
  auto: 'auto',
};

export const order = {
  '0': 0,
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  '10': 10,
  '11': 11,
  '12': 12,
  first: -9999,
  last: 9999,
  none: 0,
};

const sizeContent = {
  min: 'min-content',
  max: 'max-content',
  fit: 'fit-content',
};

export const width = {
  ...size,
  ...sizeContent,
  screen: '100vw',
};

export const height = {
  ...size,
  ...sizeContent,
  screen: '100vh',
};
