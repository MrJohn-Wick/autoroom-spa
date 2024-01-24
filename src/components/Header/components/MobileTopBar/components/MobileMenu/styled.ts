import { colorPrimary, colorTitle } from '@autrm/common/tokens/colors';
import styled from 'styled-components';

export const MainMenuStyled = styled.div<{ isMenuShowed: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 280px;
  padding: 15px 20px;
  z-index: 99999;
  height: 100%;
  overflow: auto;
  background: #fff;
  border-right: 1px solid #eee;
  transform: ${({ isMenuShowed }) => (isMenuShowed ? 'translateX(0%)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.03);
`;

export const MenuListStyled = styled.ul`
  display: flex;
  position: relative;
  flex-direction: column;
  float: none;
  text-align: left;
  padding: 25px 0 20px;
  list-style: none;

  li {
    padding: 10px 0;
    display: block;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 13px;
    transition: all 0.5s ease-out 0s;
    position: relative;
    cursor: pointer;

    &:hover a {
      color: ${colorPrimary};
    }

    a {
      text-decoration: none;
      color: ${colorTitle};
    }
  }
`;
