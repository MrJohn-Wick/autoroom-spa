import styled from 'styled-components';

import { colorBlack, colorGrey300, colorPrimary } from '@autrm/common/tokens/colors';
import { HeadingLevel6 } from '@autrm/common/tokens/typography';
import { getTextStyles } from '@autrm/common/utils/styles';

export const RightNavStyled = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-end;
  gap: 16px;
`;

export const PhoneIconStyled = styled.div``;

export const SeparatorStyled = styled.div`
  content: '';
  height: 32px;
  width: 1px;
  background-color: rgba(19, 20, 26, 0.2);
`;

export const PhoneNumberStyled = styled(HeadingLevel6)`
  display: flex;
  flex-direction: column;

  a {
    line-height: 20px;
    color: ${colorBlack};
    transition: 0.5s;
    &:hover {
      color: ${colorPrimary};
    }
  }
`;

export const PhoneTextStyled = styled.div`
  ${getTextStyles(null, 500, null, 26)}
  color: ${colorGrey300};
`;
