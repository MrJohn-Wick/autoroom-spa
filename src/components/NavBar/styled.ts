import styled from 'styled-components';

export const NavBarStyled = styled.header`
  width: 100%;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 8%;
  transition: all 0.8s ease-out 0s;
  border-bottom: 1px solid transparent;
  background-color: #fff;
  position: relative;
`;

export const MainMenuStyled = styled.div`
  display: inline-block;
  position: relative;
`;

export const MenuListStyled = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const MenuItemHasChildrenStyled = styled.li`
  display: inline-block;
  position: relative;
  padding: 0 8px;

  cursor: pointer;

  a {
    color: #13141a;
    display: block;
    padding: 15px 20px;
    position: relative;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 13px;
    transition: all 0.5s ease-out 0s;
    position: relative;
    text-decoration: none;
    line-height: 2.5;
  }

  &:first-child > a {
    padding-left: 0;
  }

  &:hover ul {
    display: block;
    animation: fade-down 0.45s linear;
  }
`;

export const SubMenuStyled = styled.ul`
  display: none;

  position: absolute;
  left: 0;
  right: 0;
  top: auto;
  margin: 0;
  display: none;
  min-width: 220px;
  background: #fff;
  box-shadow: 0px 30px 80px rgba(8, 0, 42, 0.08);
  text-align: left;
  transform-origin: top;

  li {
    padding: 0;
    display: block;
    position: relative;

    a::before {
      content: "";
      position: absolute;
      bottom: -1px;
      left: 0;
      background: linear-gradient(90deg, #fff, #db3b19, #fff);
      width: 100%;
      height: 1px;
      transform: scaleX(0);
      transform-origin: left;
      transition: 0.4s ease-in;
      z-index: 1;
    }

    a:hover::before {
      transform: scale(1);
    }
  }

  a {
    display: block;
    padding: 15px 15px;
    color: var(--text-color1);
    font-weight: 600;
    text-transform: uppercase;
    font-size: 12px;
    line-height: 1;
    transition: all 0.4s ease-out 0s;
    position: relative;
    border-bottom: 1px solid rgba(233, 228, 228, 0.5);

    &::before {
      content: "";
      position: absolute;
      bottom: -1px;
      left: 0;
      background: linear-gradient(90deg, #fff, #06D889, #fff);
      width: 100%;
      height: 1px;
      transform: scaleX(0);
      transform-origin: left;
      transition: 0.4s ease-in;
      z-index: 1;
    }
  }
`;
