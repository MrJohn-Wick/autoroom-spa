import { colorGreyAlpha, colorPrimary, colorWhite } from '@autrm/common/tokens/colors';
import { styled } from 'styled-components';

export const CardImgStyled = styled.div`
  position: relative;
  border-radius: 5px;
  transition: 0.35s;

  & img {
    border-radius: 3px;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    z-index: 1;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.5), transparent 50.27%);
    transition: 0.35s;
    opacity: 0;
  }
`;

export const CardFavStyled = styled.a`
  position: absolute;
  left: 20px;
  top: 17px;
  z-index: 2;
  display: flex;
  align-items: center;
  line-height: 1;
  transition: 0.35s;
  height: 24px;
  width: 24px;
  border-radius: 50%;
  background-color: ${colorWhite};
  justify-content: center;
`;

export const CardPriceStyled = styled.div`
  position: absolute;
  right: -1px;
  bottom: 0;
  z-index: 2;
  line-height: 1;
  display: flex;
  transition: 0.35s;

  & span {
    color: var(--title-color);
    font-family: var(--font-montserrat);
    font-size: 15px;
    font-weight: 700;
    line-height: 1;
    -webkit-clip-path: polygon(15% 0, 100% 0, 100% 100%, 0 100%);
    clip-path: polygon(15% 0, 100% 0, 100% 100%, 0 100%);
    background-color: ${colorWhite};
    padding: 4px 23px;
    transition: 0.35s;
  }
`;

export const CardContentStyled = styled.div`
  padding: 15px;
`;

export const CardStyled = styled.div`
  border-radius: 10px;
  border: 1px solid ${colorGreyAlpha};
  background: ${colorWhite};
  padding: 10px;
  transition: 0.35s;

  &:hover {
    border-color: ${colorPrimary};
  }

  &:hover ${CardPriceStyled} span {
    background-color: ${colorPrimary};
  }

  &:hover ${CardImgStyled}::after {
    opacity: 1;
  }
`;
