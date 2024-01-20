import styled, { css } from 'styled-components';

import { colorText, colorWhite } from '@autrm/common/tokens/colors';

export const MobileTopBarStyled = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  padding-top: 0;
  padding-bottom: 0;
  box-sizing: border-box;
  border-bottom: 1px solid #eee;
  background-color: ${colorWhite};
  z-index: 999;
  padding: 0 3%;
  height: 80px;

  display: flex;
  align-items: center;
  align-content: stretch;
  justify-content: space-between;
`;

export const SidebarButtonStyled = styled.div<{ isMenuShowed: boolean }>`
  display: flex;
  margin-left: 50px;
  flex-direction: column;
  align-items: end;
  visibility: visible;
  justify-content: center;
  position: relative;

  span {
    height: 2px;
    width: 25px;
    background-color: ${colorText};
    display: flex;
    transition: transform 0.5s ease-in;
    position: absolute;
    top: 0;

    ${({ isMenuShowed }) => isMenuShowed && 'background-color: transparent;'}

    &::before {
      transition-duration: 0.5s;
      position: absolute;
      width: 35px;
      height: 2px;
      background-color: ${colorText};
      content: '';
      top: -10px;
      right: 0;

      ${({ isMenuShowed }) =>
        isMenuShowed &&
        css`
          transform: rotate(45deg) translate(8px, 6px);
          width: 35px;
        `}
    }

    &::after {
      transition-duration: 0.5s;
      position: absolute;
      width: 15px;
      height: 2px;
      right: 0;
      background-color: ${colorText};
      content: '';
      top: 10px;

      ${({ isMenuShowed }) =>
        isMenuShowed &&
        css`
          transform: rotate(-45deg) translate(8px, -6px);
          width: 35px;
        `}
    }
  }
`;
