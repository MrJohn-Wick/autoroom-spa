import styled from 'styled-components';

import { ImageStyledProps, ImageStyledWrapperProps } from './types';

export const ImageStyledWrapper = styled.div<ImageStyledWrapperProps>`
  height: ${({ isFullHeight }) => (isFullHeight ? '100%' : 'auto')};
`;

export const ImageStyled = styled.img<ImageStyledProps>`
  position: relative;
  display: block;

  max-height: ${({ maxHeight }) => (typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight)};

  ${({ aspectRatio }) => aspectRatio && `aspect-ratio: ${aspectRatio};`}
  ${({ objectFit }) => objectFit && `object-fit: ${objectFit};`}
`;
