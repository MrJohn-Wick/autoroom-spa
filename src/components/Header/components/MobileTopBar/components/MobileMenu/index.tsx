/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { NavLink, Link } from 'react-router-dom';

import InstagramIcon from '@autrm/assets/icons/social/instagram-vector.svg';
import TelegramIcon from '@autrm/assets/icons/social/telegram-vector.svg';
import LogoImage from '@autrm/assets/light-logo.svg';
import { SVGIcon } from '@autrm/common/components/svg-icon';
import type { NavProps } from '@autrm/common/types/nav';
import { Logo } from '@autrm/components/Logo';
import MenuItems from '@autrm/datas/mainNav.json';

import { MainMenuStyled, MenuListStyled, SocialIconsStyled } from './styled';

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
