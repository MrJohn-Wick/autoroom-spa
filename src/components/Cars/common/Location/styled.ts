import { colorPrimary, colorTitle } from '@autrm/common/tokens/colors';
import { getTextStyles } from '@autrm/common/utils/styles';
import { styled } from 'styled-components';

export const LocationStyled = styled.div`
  padding-top: 8px;
  margin-bottom: 8px;

  & a {
    color: ${colorTitle};
    ${getTextStyles('Open Sans', 600, 13, 13)};
    display: flex;
    align-items: center;
    gap: 4px;
    transition: 0.35s;
  }

  &:hover a {
    color: ${colorPrimary};
  }
`;
