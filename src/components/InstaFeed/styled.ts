import { styled } from 'styled-components';

export const SectionStyled = styled.section`
  margin: 100px 0;
`;

export const ImageWrapperStyled = styled.div`
  & img {
    aspect-ratio: 1/1;
    object-fit: cover;
  }
`;
