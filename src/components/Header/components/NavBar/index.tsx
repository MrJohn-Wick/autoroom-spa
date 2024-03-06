/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useReducer } from 'react';

import { Link, NavLink } from 'react-router-dom';

import { Button } from '@autrm/common/components/button';
import type { NavProps } from '@autrm/common/types/nav';
import MenuItems from '@autrm/datas/mainNav.json';

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

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getSubMenuItems = (item: NavProps, key: number) => (
    <MenuItemHasChildrenStyled key={key}>
      <a href="#">{item.title}</a>
      <SubMenuStyled>
        {item?.subMenu?.map((props, index) => (
          <li key={index}>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : '')}
              to={props.link}
            >
              {props.title}
            </NavLink>
          </li>
        ))}
      </SubMenuStyled>
    </MenuItemHasChildrenStyled>
  );

  return (
    <NavBarStyled className={`${state.scrollY > 10 ? 'sticky' : ''}`}>
      <MainMenuStyled className={`main-menu ${state.isSidebarOpen ? 'show-menu' : ''}`}>
        <MenuListStyled>
          {MenuItems.map((props: NavProps, index: number) =>
            props.subMenu ? (
              getSubMenuItems(props, index)
            ) : (
              <MenuItemHasChildrenStyled key={index}>
                <NavLink
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  to={props.link}
                >
                  {props.title}
                </NavLink>
              </MenuItemHasChildrenStyled>
            ),
          )}
        </MenuListStyled>
      </MainMenuStyled>

      <div className="nav-right d-flex jsutify-content-end align-items-center">
        <Link to="/pay">
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
        </Link>
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
