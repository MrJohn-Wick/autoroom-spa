import { colorPrimary } from '@autrm/common/tokens/colors';
import { HeadingLevel6 } from '@autrm/common/tokens/typography';
import { styled } from 'styled-components';

export const TitleStyled = styled(HeadingLevel6)`
  margin-bottom: 15px;
  line-height: 1;

  &:hover {
    color: ${colorPrimary};
  }
`;
