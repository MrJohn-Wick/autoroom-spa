import { styled } from 'styled-components';

import { colorPrimary } from '@autrm/common/tokens/colors';
import { getTextStyles } from '@autrm/common/utils/styles';

export const FootnoteStyled = styled.div`
  ${getTextStyles('Montserrat', 400, 12, 16)}
  display: flex;
  flex-direction: column;

  span {
    position: absolute;
    margin-top: 12px;
    color: ${colorPrimary};
    ${getTextStyles('Montserrat', 400, 20, 16)}/* padding-right: 5px; */
  }

  p {
    padding-left: 12px;
    margin-top: 12px;
  }
`;
