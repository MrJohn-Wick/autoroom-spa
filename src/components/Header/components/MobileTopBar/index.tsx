import { useState } from 'react';

import LogoImage from '@autrm/assets/light-logo.svg';
import { Logo } from '@autrm/components/Logo';

import { MobileMenu } from './components/MobileMenu';
import { MobileTopBarStyled, SidebarButtonStyled } from './styled';

export function MobileTopBar() {
  const [isMenuShowed, setIsMenuShowed] = useState(false);

  return (
    <MobileTopBarStyled>
      <Logo type={LogoImage} />
      <SidebarButtonStyled
        isMenuShowed={isMenuShowed}
        onClick={() => setIsMenuShowed(!isMenuShowed)}
      >
        <span />
      </SidebarButtonStyled>
      <MobileMenu
        isMenuShowed={isMenuShowed}
        clickCb={setIsMenuShowed}
      />
    </MobileTopBarStyled>
  );
}
