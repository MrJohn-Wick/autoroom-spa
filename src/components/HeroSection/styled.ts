import styled from 'styled-components';

import { colorGrey300 } from '@autrm/common/tokens/colors';
import { ADAPTIVE } from '@autrm/common/tokens/screen';
import { HeadingLevel1, RegularTextLevel1 } from '@autrm/common/tokens/typography';
import { getTextStyles } from '@autrm/common/utils/styles';

export const HeroSectionStyled = styled.div`
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(238, 241, 251, 1) 10%,
    rgba(238, 241, 251, 1) 90%,
    rgba(255, 255, 255, 1) 100%
  );

  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 200px;

  ${ADAPTIVE.minWidth.tablet} {
    justify-content: flex-end;
    min-height: 600px;
  }

  ${ADAPTIVE.minWidth.desktop} {
    justify-content: flex-end;
    min-height: 700px;
  }

  img {
    margin-bottom: -100px;
    height: auto;
    max-width: 100%;
  }
`;
export const HeadingLevel1Styled = styled(HeadingLevel1)`
  margin-top: 0px;

  ${ADAPTIVE.minWidth.desktop} {
    text-transform: uppercase;
    ${getTextStyles('Montserrat', 700, 100, 94)}

    background: linear-gradient(358deg, #000000 0.95%, #717171 60.41%, #434343 75.14%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 1px 0px 5px rgba(0, 0, 0, 0.29);
  }
`;

export const RegularTextLevel1Styled = styled(RegularTextLevel1)`
  text-transform: uppercase;
  color: ${colorGrey300};
`;
