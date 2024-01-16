import { ReactNode, KeyboardEvent, SyntheticEvent } from 'react';

import { ADAPTIVE } from '../../tokens/screen';
import { Noop } from '../../utils/common';

export type SizeType = 4 | 6 | 16 | 20 | 24 | 32 | 36 | 40 | 48 | 56 | 66 | 82 | 96 | 120;

export type IconSize =
  | 'xxxxs'
  | 'xxxs'
  | 'xxs'
  | 'xs'
  | 's'
  | 'm'
  | 'sm'
  | 'xm'
  | 'l'
  | 'xl'
  | 'xxl'
  | 'xxxl'
  | 'xxxxl'
  | 'xxxxxl';

export type Breakpoint = keyof typeof ADAPTIVE.minWidth;

// eslint-disable-next-line no-unused-vars
export type IconSizes<T> = { [K in Breakpoint]?: T };

export type TIconProps = {
  type?: ReactNode;
  fill?: string;
  pathFill?: string;
  rectFill?: string;
  stroke?: string;
  size?: SizeType;
  sizes: { w: number; h: number };
  loader?: ReactNode;
  viewBox?: string;
  dataIconType?: string;
  className?: string;
  children?: ReactNode;
  order?: number;
  iconRotate?: number;
  title?: string;
  tabIndex?: number;
  isHoverEffect?: boolean;
  isActive?: boolean;
  keyDownHandler?: (event: KeyboardEvent<HTMLElement>) => void | Noop;
  onClick?: (e: SyntheticEvent) => void;
};

export type TSvgIconProps = {
  className?: string;
  order?: number;
  size?: SizeType;
  sizes?: { w: number; h: number }; // IconSizes<SizeType>;
  iconRotate?: number;
  pathFill?: string;
  rectFill?: string;
  stroke?: string;
  isButton?: boolean;
  isHoverEffect?: boolean;
  isActive?: boolean;
};

// For helpers file
export type TSizeProps = SizeType | IconSizes<SizeType>;

export type TCorrectSizeProps = {
  correctSize?: SizeType;
  correctSizes?: IconSizes<SizeType>;
};
