/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useReducer } from 'react';

import { Link, useLocation } from 'react-router-dom';

import { Button } from '@autrm/common/components/button';

import { initialState, reducer } from './reducer';
import {
  MainMenuStyled,
  MenuItemHasChildrenStyled,
  MenuListStyled,
  NavBarStyled,
  SubMenuStyled,
} from './styled';

export function NavBar() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleScroll = () => {
    const { scrollY } = window;
    dispatch({
      type: 'setScrollY',
      payload: scrollY,
    });
  };

  const currentRoute = useLocation().pathname;

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <NavBarStyled className={`${state.scrollY > 10 ? 'sticky' : ''} header-area style-5`}>
      <MainMenuStyled className={`main-menu ${state.isSidebarOpen ? 'show-menu' : ''}`}>
        <MenuListStyled>
          <MenuItemHasChildrenStyled
            className={`menu-item-has-children ${currentRoute === '/' ? 'active' : ''}`}
          >
            <a>Главная</a>
            <SubMenuStyled
              className={`sub-menu ${state.activeMenu === 'home-one' ? 'd-block' : ''}`}
            >
              <li>
                <Link to="/">Home 01</Link>
              </li>
              <li>
                <Link to="/index2">Home 02</Link>
              </li>
              <li>
                <Link to="/index3">Home 03</Link>
              </li>
              <li>
                <Link to="/index4">Home 04</Link>
              </li>
              <li>
                <Link to="/index5">Home 05</Link>
              </li>
              <li>
                <Link to="/index6">Home 06</Link>
              </li>
            </SubMenuStyled>
          </MenuItemHasChildrenStyled>
          <MenuItemHasChildrenStyled
            className={`menu-item-has-children ${currentRoute === '/' ? 'active' : ''}`}
          >
            <a>Услуги</a>
            <SubMenuStyled
              className={`sub-menu ${state.activeMenu === 'home-one' ? 'd-block' : ''}`}
            >
              <li>
                <Link to="/">Home 01</Link>
              </li>
              <li>
                <Link to="/index2">Home 02</Link>
              </li>
              <li>
                <Link to="/index3">Home 03</Link>
              </li>
              <li>
                <Link to="/index4">Home 04</Link>
              </li>
              <li>
                <Link to="/index5">Home 05</Link>
              </li>
              <li>
                <Link to="/index6">Home 06</Link>
              </li>
            </SubMenuStyled>
          </MenuItemHasChildrenStyled>
        </MenuListStyled>
      </MainMenuStyled>
      <div className="nav-right d-flex jsutify-content-end align-items-center">
        <Button
          data-bs-toggle="modal"
          data-bs-target="#signUpModal01"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="16"
            viewBox="0 0 512 512"
          >
            <path d="M135.2 117.4L109.1 192H402.9l-26.1-74.6C372.3 104.6 360.2 96 346.6 96H165.4c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32H346.6c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2V400v48c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V400H96v48c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V400 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
          </svg>
          ЗАКАЗАТЬ
        </Button>
        <div
          className={`sidebar-button mobile-menu-btn ${state.isSidebarOpen ? 'active' : ''}`}
          onClick={() => null}
        >
          <span />
        </div>
      </div>
    </NavBarStyled>
  );
}
