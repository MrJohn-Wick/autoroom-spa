import { styled } from 'styled-components';

import { colorBlack, colorPrimary } from '@autrm/common/tokens/colors';
import { getTextStyles } from '@autrm/common/utils/styles';

export const SumSectionStyled = styled.div`
  background-color: #fff;
  border-radius: 8px;
  justify-content: space-between;
  overflow: hidden;
  position: relative;
  white-space: normal;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  padding: 24px;
  /* box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s cubic-bezier(0, 0, 0.5, 1); */
  border: 1px solid #ebebeb;
`;

export const CompanyStyled = styled.div`
  ${getTextStyles('Montserrat', 500, 14, 20)}
`;

export const LineStyled = styled.div`
  background-color: #ccc;
  height: 1px;
  width: 100%;
`;

export const PriceStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PriceLabelStyled = styled.span`
  ${getTextStyles('Montserrat', 700, 16, 20)}
  display: flex;
`;

export const PriceAmountStyled = styled.span`
  ${getTextStyles('Montserrat', 500, 20, 20)}
  display: flex;
  color: ${colorPrimary};
`;

export const CurrencyStyled = styled.span`
  ${getTextStyles('Montserrat', 500, 12, 16)}
  padding-left: 5px;
  color: ${colorBlack};
`;

export const ServiceTypeStyled = styled.div`
  ${getTextStyles('Montserrat', 700, 16, 10)}
`;

export const ServiceLabelStyled = styled.div`
  ${getTextStyles('Montserrat', 400, 14, 16)}
`;
