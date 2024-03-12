/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { NavLink, Link } from 'react-router-dom';

import InstagramIcon from '@autrm/assets/icons/social/instagram-vector.svg';
import TelegramIcon from '@autrm/assets/icons/social/telegram-vector.svg';
import LogoImage from '@autrm/assets/light-logo.svg';
import { Button } from '@autrm/common/components/button';
import { SVGIcon } from '@autrm/common/components/svg-icon';
import type { NavProps } from '@autrm/common/types/nav';
import { Logo } from '@autrm/components/Logo';
import MenuItems from '@autrm/datas/mainNav.json';

import {
  MainMenuStyled,
  MenuListStyled,
  PayButtonSectionStyled,
  SocialIconsStyled,
} from './styled';

export function MobileMenu({
  isMenuShowed,
  clickCb,
}: {
  isMenuShowed: boolean;
  clickCb: (newState: boolean) => void;
}) {
  return (
    <MainMenuStyled isMenuShowed={isMenuShowed}>
      <Logo type={LogoImage} />
      <PayButtonSectionStyled>
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
      </PayButtonSectionStyled>
      <MenuListStyled>
        {MenuItems.map(
          ({ title, link }: NavProps, index: number): JSX.Element => (
            <li
              key={`${title}-${index}`}
              onClick={() => clickCb(false)}
            >
              <NavLink
                className={({ isActive }) => (isActive ? 'active' : '')}
                to={link}
              >
                {title}
              </NavLink>
            </li>
          ),
        )}
      </MenuListStyled>
      <SocialIconsStyled>
        <Link to="https://www.instagram.com/autoroom_by/">
          <SVGIcon
            type={InstagramIcon}
            sizes={{
              w: '48px',
              h: '48px',
            }}
          />
        </Link>
        <Link to="https://t.me/autoroomby">
          <SVGIcon
            type={TelegramIcon}
            sizes={{
              w: '48px',
              h: '48px',
            }}
          />
        </Link>
      </SocialIconsStyled>
    </MainMenuStyled>
  );
}
