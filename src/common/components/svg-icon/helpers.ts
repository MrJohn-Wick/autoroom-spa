import { ICON_SIZE } from './constants';
import { SizeType, IconSizes, TSizeProps, TCorrectSizeProps } from './types';

export const getCorrectSize = (size: TSizeProps): TCorrectSizeProps => {
  if (typeof size === 'object' && Object.keys(size).length > 0) {
    return {
      correctSize: undefined,
      correctSizes: size as IconSizes<SizeType>,
    } as const;
  }

  return {
    correctSize: Object.values(ICON_SIZE).includes(size as SizeType)
      ? (size as SizeType)
      : ICON_SIZE.xs,
    correctSizes: undefined,
  } as const;
};
