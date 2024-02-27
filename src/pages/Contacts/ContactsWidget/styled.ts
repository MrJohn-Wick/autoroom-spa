import { colorPrimary, colorText } from '@autrm/common/tokens/colors';
import { getTextStyles } from '@autrm/common/utils/styles';
import { styled } from 'styled-components';

export const ContactsItemStyled = styled.div`
  margin: 20px 0;
`;

export const H4Styled = styled.h4`
  ${getTextStyles('Montserrat', 400, 14, 14)};
`;

export const ContactItemContent = styled.div`
  ${getTextStyles('Montserrat', 600, 18, 30)};

  & a:hover {
    color: ${colorPrimary};
  }
`;

export const ContactsItemDescriptionStyled = styled.div`
  color: ${colorText};
`;
