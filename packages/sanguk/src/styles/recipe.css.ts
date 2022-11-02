import { recipe } from '@vanilla-extract/recipes';
import kebabCase from 'lodash-es/kebabCase';

const flexContents = ['start', 'center', 'end'] as const;
const flexDirections = ['column', 'columnReverse', 'row', 'rowReverse'] as const;

type KebabCase<T extends string, A extends string = ''> = T extends `${infer F}${infer R}`
  ? KebabCase<R, `${A}${F extends Lowercase<F> ? '' : '-'}${Lowercase<F>}`>
  : A;

type FlexType = typeof flexContents[number];
type FlexContent<T extends FlexType> = T extends infer R ? (R extends 'center' ? T : `flex-${T}`) : never;

type FlexDirectionVars = {
  [P in typeof flexDirections[number]]: {
    true: { flexDirection: KebabCase<P> };
  };
};

type FlexAttr<P extends FlexType, K extends string[]> = {
  [T in K[number]]: FlexContent<P>;
};
type FlexVar<K extends string[]> = {
  [P in FlexType]: FlexAttr<P, K>;
};

type FlexVars = {
  justify: FlexVar<['justifyContent']>;
  items: FlexVar<['alignItems']>;
} & { [P in FlexType]: { true: FlexAttr<P, ['justifyContent', 'alignItems']> } };

const flexPrefix = <T extends FlexType>(type: T) => (type === 'center' ? type : `flex-${type}`) as FlexContent<T>;
const { justify, items, start, center, end } = flexContents.reduce(
  (acc, key) => ({
    ...acc,
    [key]: { true: { justifyContent: flexPrefix(key), alignItems: flexPrefix(key) } },
    justify: { ...acc.justify, [key]: { justifyContent: flexPrefix(key) } },
    items: { ...acc.items, [key]: { alignItems: flexPrefix(key) } },
  }),
  {} as FlexVars,
);

const { row, rowReverse, column, columnReverse } = flexDirections.reduce(
  (acc, key) => ({
    ...acc,
    [key]: { true: { flexDirection: kebabCase(key) } },
  }),
  {} as FlexDirectionVars,
);

const variants = {
  justify,
  items,
  start,
  center,
  end,
  row,
  rowReverse,
  column,
  columnReverse,
};

export const flex = recipe({
  base: { display: 'flex' },
  variants,
});

export const inLineFlex = recipe({
  base: { display: 'inline-flex' },
  variants,
});
