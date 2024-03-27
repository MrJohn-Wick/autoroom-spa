import { styled } from 'styled-components';

import { RegularTextLevel1 } from '@autrm/common/tokens/typography';
import { getTextStyles } from '@autrm/common/utils/styles';

export const InfoStyled = styled.div`
  padding-top: 100px;
  text-align: center;
  max-width: 850px;
  margin: 0 auto;

  p {
    line-height: 24px;
  }
`;

export const RegularTextLevel1Styled = styled(RegularTextLevel1)`
  padding: 24px 0;
  ${getTextStyles('Montserrat', 400, 24, null)}
`;
