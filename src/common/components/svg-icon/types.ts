import type { ReactNode, KeyboardEvent, SyntheticEvent } from 'react';

import type { ADAPTIVE } from '../../tokens/screen';
import type { Noop } from '../../utils/common';

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

export type IconProps = {
  type?: ReactNode;
  fill?: string;
  pathFill?: string;
  rectFill?: string;
  stroke?: string;
  size?: SizeType;
  sizes: { w: string; h: string };
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

export type SvgIconProps = {
  className?: string;
  order?: number;
  size?: SizeType;
  sizes?: { w: string; h: string }; // IconSizes<SizeType>;
  iconRotate?: number;
  pathFill?: string;
  rectFill?: string;
  stroke?: string;
  isButton?: boolean;
  isHoverEffect?: boolean;
  isActive?: boolean;
};

// For helpers file
export type SizeProps = SizeType | IconSizes<SizeType>;

export type CorrectSizeProps = {
  correctSize?: SizeType;
  correctSizes?: IconSizes<SizeType>;
};
