import { css, styled } from 'styled-components';

import { colorBlack, colorPrimary } from '@autrm/common/tokens/colors';
import { getTextStyles } from '@autrm/common/utils/styles';

export const ServiceCardStyled = styled.div<{ isActive: boolean }>`
  /* padding: 24px;
  border: 1px solid #ccc;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 24px;
  background-color: #fff; */

  background-color: #fff;
  border-radius: 18px;
  justify-content: space-between;
  overflow: hidden;
  position: relative;
  white-space: normal;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 24px;
  padding: 24px;
  box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s cubic-bezier(0, 0, 0.5, 1);

  cursor: pointer;

  box-shadow: 1px -1px 11px -1px rgba(156, 156, 156, 0.36);
  -webkit-box-shadow: 1px -1px 11px -1px rgba(156, 156, 156, 0.36);
  -moz-box-shadow: 1px -1px 11px -1px rgba(156, 156, 156, 0.36);

  &:hover {
    /* border-color: ${colorPrimary};
    box-shadow: 1px -1px 11px -1px rgba(250, 45, 45, 0.36);
    -webkit-box-shadow: 1px -1px 11px -1px rgba(250, 45, 45, 0.36);
    -moz-box-shadow: 1px -1px 11px -1px rgba(250, 45, 45, 0.36); */

    box-shadow: 2px 4px 16px rgba(0, 0, 0, 0.16);
    transform: scale3d(1.01, 1.01, 1.01);
  }

  ${({ isActive }) =>
    isActive
      ? css`
          border: 1px solid ${colorPrimary};
        `
      : css`
          border: 1px solid transparent;
        `};

  img {
    max-height: 72px;
  }
`;

export const TitleStyled = styled.div`
  ${getTextStyles('Montserrat', 500, 20, 24)}
`;

export const PriceStyled = styled.div`
  ${getTextStyles('Montserrat', 500, 36, 48)}
  color: ${colorPrimary};
`;

export const CurrencyStyled = styled.span`
  ${getTextStyles('Montserrat', 400, 16, 24)}
  color: ${colorBlack};
`;

export const ServiceCardIconStyled = styled.div`
  fill: ${colorPrimary};
`;
