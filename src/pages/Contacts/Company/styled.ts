import { colorText } from '@autrm/common/tokens/colors';
import { getTextStyles } from '@autrm/common/utils/styles';
import { styled } from 'styled-components';

export const CompanyStyled = styled.div`
  text-align: center;
  margin-top: 40px;
  color: ${colorText};
  ${getTextStyles('Open Sans', null, null, null)};
`;
