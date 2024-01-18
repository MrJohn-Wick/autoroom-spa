import LogoImage from '@autrm/assets/light-logo.svg';

import { Logo } from '../Logo';

import { LeftNav } from './components/LeftNav';
import { RightNav } from './components/RightNav';
import { TopBarStyled } from './styled';

export function TopBar() {
  return (
    <TopBarStyled>
      <Logo type={LogoImage} />
      <LeftNav />
      <RightNav />
    </TopBarStyled>
  );
}
