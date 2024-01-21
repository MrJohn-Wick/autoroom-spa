import { colorPrimary, colorTitle } from '@autrm/common/tokens/colors';
import { getTextStyles } from '@autrm/common/utils/styles';
import { styled } from 'styled-components';

export const ContentBottomStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;

  & a {
    ${getTextStyles('Open Sans', 600, 14, 17)}
    font-family: var(--font-montserrat);
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: ${colorTitle};
    display: flex;
    align-items: center;
    gap: 7px;
    transition: 0.35s;
  }

  & a:hover {
    color: ${colorPrimary};
  }

  & a svg {
    fill: ${colorPrimary};
  }
`;
