import styled from 'styled-components';

import { colorBlack, colorGrey200, colorPrimary, colorWhite } from '@autrm/common/tokens/colors';
import { ADAPTIVE } from '@autrm/common/tokens/screen';

export const SearchStyled = styled.div`
  position: relative;
  margin-top: 70px;

  ${ADAPTIVE.minWidth.tablet} {
    width: 70%;
  }

  ${ADAPTIVE.minWidth.desktop} {
    width: 600px;
  }

  ${ADAPTIVE.minWidth.desktopLg} {
    width: 670px;
  }

  input:focus {
    border: 1px solid rgba(222, 33, 21, 0.3);
    -webkit-box-shadow: -1px -1px 8px 3px rgba(255, 0, 0, 0.15);
    -moz-box-shadow: -1px -1px 8px 3px rgba(255, 0, 0, 0.15);
    box-shadow: -1px -1px 8px 3px rgba(255, 0, 0, 0.15);
  }

  input::placeholder {
    color: ${colorGrey200};
    opacity: 1; /* Firefox */
  }

  input::-ms-input-placeholder {
    color: red;
  }

  input {
    width: 100%;
    height: 65px;
    border-radius: 50px;
    border: 1px solid ${colorGrey200};
    margin-bottom: 65px;
    outline: 0;
    padding: 0 30px;
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
