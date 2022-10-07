import { size } from '@/styles/size.css';

export const overflow = ['hidden', 'auto', 'clip', 'visible', 'scroll'] as const;

export const textAlign = {
  left: 'left',
  center: 'center',
  right: 'right',
  justify: 'justify',
  start: 'start',
  end: 'end',
} as const;

export const zIndex = {
  '0': 0,
  '10': 10,
  '20': 20,
  '30': 30,
  '40': 40,
  '50': 50,
  auto: 'auto',
} as const;

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
} as const;

const content = {
  min: 'min-content',
  max: 'max-content',
  fit: 'fit-content',
} as const;

export const width = {
  ...size,
  ...content,
  screen: '100vw',
} as const;

export const height = {
  ...size,
  ...content,
  screen: '100vh',
} as const;
