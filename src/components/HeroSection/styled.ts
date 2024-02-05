import styled from 'styled-components';

import { colorBlack, colorPrimary, colorWhite } from '@autrm/common/tokens/colors';
import { ADAPTIVE } from '@autrm/common/tokens/screen';
import { HeadingLevel1 } from '@autrm/common/tokens/typography';

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

  input {
    width: 100%;
    height: 65px;
    border-radius: 50px;
    border: 1px solid ${colorWhite};
    margin-bottom: 65px;
    outline: 0;
    padding: 0 50px;
    font-size: 24px;

    &:focus {
      outline: 0;
    }
  }

  button {
    position: absolute;
    font-weight: 500;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    user-select: none;
    border: 1px solid transparent;
    padding: 14px 14px;
    font-size: 0.9375rem;
    border-radius: 30px;
    transition:
      color 0.15s ease-in-out,
      background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;
    background: ${colorPrimary};
    border-color: ${colorPrimary};
    color: ${colorWhite};
    top: 9px;
    right: 12px;

    svg {
      fill: ${colorWhite};
    }

    &:hover {
      // transform: skewX(45deg) scale(1, 1);
      background-color: ${colorBlack};
      border-color: ${colorBlack};
    }

    &::after {
      /* position: absolute;
      content: '';
      display: block;
      left: 15%;
      right: -20%;
      top: -4%;
      height: 150%;
      width: 150%;
      bottom: 0;
      border-radius: 2px;
      background-color: #000000;
      transform: skewX(45deg) scale(0, 1);
      z-index: -1;
      transition: all 0.5s ease-out 0s; */
    }
  }
`;

export const SearchStyled = styled.div`
  position: relative;

  ${ADAPTIVE.minWidth.tablet} {
    width: 70%;
  }

  ${ADAPTIVE.minWidth.desktopLg} {
    width: 40%;
  }
`;

export const HeadingLevel1Styled = styled(HeadingLevel1)`
  margin-top: 0px;
  margin-bottom: 45px;

  ${ADAPTIVE.minWidth.desktop} {
    margin-top: 165px;
    margin-bottom: 85px;
  }
`;
