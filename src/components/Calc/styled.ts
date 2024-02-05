import { colorTitle } from '@autrm/common/tokens/colors';
import { getTextStyles } from '@autrm/common/utils/styles';
import { styled } from 'styled-components';

export const CalcWrapperStyled = styled.div`
  display: flex;
  gap: 50px;
  flex-wrap: wrap;

  & > * {
    flex: 1 1 auto;
  }
`;

export const CalcTitleStyled = styled.h5`
  color: ${colorTitle};
  ${getTextStyles('Montserrat', 600, 20, null)}
  position: relative;
  display: inline-block;
  margin-bottom: 25px;

  &::after {
    content: '';
    width: 43px;
    height: 1px;
    background: linear-gradient(90deg, #13141a, rgba(19, 20, 26, 0));
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: -53px;
  }
`;
