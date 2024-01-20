import LogoImage from '@autrm/assets/light-logo.svg';
import { Logo } from '@autrm/components/Logo';

import { MainMenuStyled, MenuListStyled } from './styled';

export function MobileMenu({ isMenuShowed }: { isMenuShowed: boolean }) {
  return (
    <MainMenuStyled isMenuShowed={isMenuShowed}>
      <Logo type={LogoImage} />
      <MenuListStyled>
        <li>fsdfdsfd</li>
        <li>fsdfdsfd</li>
        <li>fsdfdsfd</li>
        <li>fsdfdsfd</li>
      </MenuListStyled>
    </MainMenuStyled>
  );
}
