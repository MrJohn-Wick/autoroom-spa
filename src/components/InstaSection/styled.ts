import { colorText } from '@autrm/common/tokens/colors';
import { ADAPTIVE } from '@autrm/common/tokens/screen';
import { getTextStyles } from '@autrm/common/utils/styles';
import { styled } from 'styled-components';

export const SectionStyled = styled.section`
  margin: 100px 0;
`;

export const LayoutStyled = styled.div`
  display: flex;

  ${ADAPTIVE.maxWidth.mobile} {
    flex-direction: column;
  }

  ${ADAPTIVE.maxWidth.tablet} {
    flex-direction: column;
  }
`;

export const TitleStyled = styled.div`
  margin-bottom: 50px;

  & h2 {
    margin-bottom: 5px;
  }
  & p {
    ${getTextStyles('Open Sans', 400, 16, 26)};
    color: ${colorText};
  }
`;
