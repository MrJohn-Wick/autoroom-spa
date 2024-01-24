/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Link } from 'react-router-dom';

import LogoImage from '@autrm/assets/light-logo.svg';
import type { NavProps } from '@autrm/common/types/nav';
import { Logo } from '@autrm/components/Logo';
import MenuItems from '@autrm/datas/mainNav.json';

import { MainMenuStyled, MenuListStyled } from './styled';

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
              <Link to={link}>{title}</Link>
            </li>
          ),
        )}
      </MenuListStyled>
    </MainMenuStyled>
  );
}
