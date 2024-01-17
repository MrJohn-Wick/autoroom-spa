import type { HTMLAttributes } from 'react';

import type { ImageComponentProps } from '../../types/images';
import type { AspectRatio } from '../../utils/constants';

export interface ImageAtomComponentProps
  extends HTMLAttributes<HTMLImageElement>,
    ImageComponentProps {
  displayPopupTitle?: boolean;
  onError?: () => void;
  dataTestId?: string;
  aspectRatio?: AspectRatio;
  objectFit?: string;
  errorPlaceholderHasBackground?: boolean;
  placeholderComponent?: JSX.Element | null;
}

export interface ImageStyledProps {
  maxHeight: number | string;
  aspectRatio?: AspectRatio;
  objectFit?: string;
}

export interface ImageStyledWrapperProps {
  isFullHeight: boolean;
}
