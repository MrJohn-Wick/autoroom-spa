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

  -webkit-animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;

  @-webkit-keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  img {
    margin-bottom: -100px;
    height: auto;
    max-width: 100%;

    -webkit-animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

    @-webkit-keyframes slide-top {
      0% {
        -webkit-transform: translateY(100px);
        transform: translateY(100px);
      }
      100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
      }
    }
    @keyframes slide-top {
      0% {
        -webkit-transform: translateY(100px);
        transform: translateY(100px);
      }
      100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
      }
    }
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
