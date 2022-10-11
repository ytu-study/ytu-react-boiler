import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';
import { style } from '@vanilla-extract/css';
import { color } from 'src/styles/color.css';
import { fontFamily, fontWeight, lineHeight, fontSize, fontStyle } from './typography.css';
import { size, space } from './size.css';
import { borderSize, borderRadius, shadow } from './border.css';
import { overflow, width, height, zIndex, order, textAlign } from './vars.css';

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' },
  },
  defaultCondition: 'tablet',
  properties: {
    display: ['none', 'flex', 'block', 'inline', 'inline-flex'],
    flexDirection: ['row', 'row-reverse', 'column', 'column-reverse'],
    justifyContent: ['stretch', 'flex-start', 'center', 'flex-end', 'space-around', 'space-between', 'space-evenly'],
    justifyItems: ['stretch', 'start', 'center', 'end'],
    justifySelf: ['stretch', 'start', 'center', 'end', 'auto'],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end', 'baseline'],
    alignContent: ['flex-start', 'center', 'flex-end', 'space-around', 'space-between', 'space-evenly'],
    alignSelf: ['stretch', 'flex-start', 'center', 'flex-end', 'baseline'],
    placeContent: ['stretch', 'start', 'center', 'end', 'space-around', 'space-between', 'space-evenly'],
    placeItems: ['stretch', 'start', 'center', 'end'],
    placeSelf: ['stretch', 'start', 'center', 'end', 'auto'],
    flexBasis: size,
    flexGrow: [0, 1],
    flexShrink: [0, 1],
    order,
    flex: {
      1: '1 1 0%',
      auto: '1 1 0%',
      initial: '0 1 0%',
      none: 'none',
    },
    flexWrap: ['wrap', 'wrap-reverse', 'nowrap'],
    position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
    textAlign,
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    marginTop: space,
    marginBottom: space,
    marginLeft: space,
    marginRight: space,
    gap: space,
    columnGap: space,
    rowGap: space,
    width,
    minWidth: width,
    maxWidth: width,
    height,
    minHeight: height,
    maxHeight: height,
    top: size,
    left: size,
    bottom: size,
    right: size,
    objectFit: ['contain', 'cover', 'fill', 'none', 'scale-down'],
    pointerEvents: ['none', 'auto'],
    overflow,
    overflowX: overflow,
    overflowY: overflow,
    opacity: [0, 1],
    transition: {
      slow: 'transform .3s ease, opacity .3s ease',
      fast: 'transform .15s ease, opacity .15s ease',
    },
    visibility: ['visible', 'hidden'],
    zIndex,
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    placeItems: ['justifyContent', 'alignItems'],
    inset: ['top', 'left', 'right', 'bottom'],
    insetX: ['left', 'right'],
    insetY: ['top', 'bottom'],
    gapX: ['columnGap'],
    gapY: ['rowGap'],
  },
});

export const lightMode = 'light';
export const darkMode = 'dark';

const systemProperties = defineProperties({
  conditions: {
    light: {},
    dark: { selector: `.${darkMode} &` },
  },
  defaultCondition: darkMode,
  properties: {
    color: color,
    background: color,
    borderColor: color,
    fontFamily: fontFamily,
    fontSize: fontSize,
    fontWeight: fontWeight,
    fontStyle: fontStyle,
    lineHeight: lineHeight,
    borderRadius: borderRadius,
    borderTopLeftRadius: borderRadius,
    borderTopRightRadius: borderRadius,
    borderBottomLeftRadius: borderRadius,
    borderBottomRightRadius: borderRadius,
    borderTopWidth: borderSize,
    borderLeftWidth: borderSize,
    borderBottomWidth: borderSize,
    borderRightWidth: borderSize,
    borderWidth: borderSize,
    borderStyle: ['solid', 'dashed', 'dotted', 'double', 'hidden', 'none'],
    boxShadow: shadow,
  },
  shorthands: {
    rounded: ['borderRadius'],
    roundedT: ['borderTopLeftRadius', 'borderTopRightRadius'],
    roundedR: ['borderTopRightRadius', 'borderBottomRightRadius'],
    roundedB: ['borderBottomRightRadius', 'borderBottomLeftRadius'],
    roundedL: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
    roundedTL: ['borderTopLeftRadius'],
    roundedTR: ['borderTopRightRadius'],
    roundedBR: ['borderBottomRightRadius'],
    roundedBL: ['borderBottomLeftRadius'],
    borderX: ['borderLeftWidth', 'borderRightWidth'],
    borderY: ['borderTopWidth', 'borderBottomWidth'],
    borderT: ['borderTopWidth'],
    borderR: ['borderRightWidth'],
    borderB: ['borderBottomWidth'],
    borderL: ['borderLeftWidth'],
  },
});

export const sprinkles = createSprinkles(responsiveProperties, systemProperties);

export const clickable = style({
  ':hover': {
    cursor: 'pointer',
  },
});

// It's a good idea to export the Sprinkles type too
export type Sprinkles = Parameters<typeof sprinkles>[0];
