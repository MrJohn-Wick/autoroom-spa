import { ADAPTIVE } from '@autrm/common/tokens/screen';
import { styled } from 'styled-components';

export const GridWrapperStyled = styled.div`
  flex: 1 1 75%;
`;

export const GridStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ImageWrapperStyled = styled.div`
  flex: 1 1 30%;

  ${ADAPTIVE.maxWidth.tablet} {
    flex: 1 1 50%;
  }

  ${ADAPTIVE.maxWidth.mobile} {
    flex: 1 1 100%;
  }

  & img {
    aspect-ratio: 1/1;
    object-fit: cover;
  }
`;
