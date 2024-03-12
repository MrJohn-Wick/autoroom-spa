import { styled } from 'styled-components';

import { colorGrey200, colorWhite } from '@autrm/common/tokens/colors';
import { getTextStyles } from '@autrm/common/utils/styles';

export const ContractSectionStyled = styled.section`
  max-height: 40dvh;
  overflow-y: scroll;
  border: 1px solid ${colorGrey200};
  padding: 12px;
  margin-bottom: 12px;
  background-color: ${colorWhite};
  ${getTextStyles('Open Sans', 400, 12, 16)}
`;
