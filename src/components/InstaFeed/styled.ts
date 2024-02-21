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

  & img {
    aspect-ratio: 1/1;
    object-fit: cover;
  }
`;
