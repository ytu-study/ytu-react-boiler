import { style } from '@vanilla-extract/css';
import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';
import { themeColors } from '@/styles/theme.css';
import { borderRadius, borderSize, shadow } from './border.css';
import { size, space } from './size.css';
import { fontFamily, fontSize, fontStyle, fontWeight, lineHeight } from './typography.css';
import { content, display, flexContent, height, objectFit, order, overflow, spaceContent, textAlign, width, zIndex } from './vars.css';

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' },
  },
  defaultCondition: 'mobile',
  properties: {
    display,
    flexDirection: ['row', 'row-reverse', 'column', 'column-reverse'],
    justifyContent: ['stretch', ...flexContent, ...spaceContent],
    justifyItems: ['stretch', ...content],
    justifySelf: ['stretch', ...content, 'auto'],
    alignItems: ['stretch', ...flexContent, 'baseline'],
    alignContent: [...flexContent, ...spaceContent],
    alignSelf: ['stretch', ...flexContent, 'baseline'],
    placeContent: ['stretch', ...content, ...spaceContent],
    placeItems: ['stretch', ...content],
    placeSelf: ['stretch', ...content, 'auto'],
    flexBasis: size,
    flexGrow: ['0', '1'],
    flexShrink: ['0', '1'],
    order,
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
    objectFit,
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
    w: ['width'],
    h: ['height'],
    wh: ['width', 'height'],
    minW: ['minWidth'],
    minH: ['minHeight'],
    maxW: ['maxWidth'],
    maxH: ['maxHeight'],
    p: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    px: ['paddingLeft', 'paddingRight'],
    py: ['paddingTop', 'paddingBottom'],
    pt: ['paddingTop'],
    pb: ['paddingBottom'],
    pr: ['paddingRight'],
    pl: ['paddingLeft'],
    m: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    mx: ['marginLeft', 'marginRight'],
    my: ['marginTop', 'marginBottom'],
    mt: ['marginTop'],
    mb: ['marginBottom'],
    mr: ['marginRight'],
    ml: ['marginLeft'],
    t: ['top'],
    b: ['bottom'],
    l: ['left'],
    r: ['right'],
    lt: ['left', 'top'],
    rt: ['right', 'top'],
    lb: ['left', 'bottom'],
    rb: ['right', 'bottom'],
    inset: ['top', 'left', 'right', 'bottom'],
    insetX: ['left', 'right'],
    insetY: ['top', 'bottom'],
    gapX: ['columnGap'],
    gapY: ['rowGap'],
    z: ['zIndex'],
    flex: ['justifyContent', 'alignItems'],
  },
});

const unconditionalProperties = defineProperties({
  properties: {
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
    pointerEvents: ['none', 'auto'],
    cursor: ['default', 'pointer', 'not-allowed', 'text'],
  },
  shorthands: {
    rounded: ['borderRadius'],
    roundedT: ['borderTopLeftRadius', 'borderTopRightRadius'],
    roundedR: ['borderTopRightRadius', 'borderBottomRightRadius'],
    roundedB: ['borderBottomRightRadius', 'borderBottomLeftRadius'],
    roundedL: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
    roundedTl: ['borderTopLeftRadius'],
    roundedTr: ['borderTopRightRadius'],
    roundedBr: ['borderBottomRightRadius'],
    roundedBl: ['borderBottomLeftRadius'],
    borderX: ['borderLeftWidth', 'borderRightWidth'],
    borderY: ['borderTopWidth', 'borderBottomWidth'],
    borderT: ['borderTopWidth'],
    borderR: ['borderRightWidth'],
    borderB: ['borderBottomWidth'],
    borderL: ['borderLeftWidth'],
  },
});

export const lightMode = 'light';
export const darkMode = 'dark';

const colorProperties = defineProperties({
  conditions: {
    light: { selector: `.${lightMode} &` },
    dark: { selector: `.${darkMode} &` },
  },
  defaultCondition: [lightMode, darkMode],
  properties: {
    color: themeColors,
    borderColor: themeColors,
    backgroundColor: themeColors,
  },
});

export const sprinkles = createSprinkles(responsiveProperties, unconditionalProperties, colorProperties);

export const clickable = style({
  ':hover': {
    cursor: 'pointer',
  },
});

export type Sprinkles = Parameters<typeof sprinkles>[0];
