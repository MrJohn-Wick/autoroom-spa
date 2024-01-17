import LogoImage from '@autrm/assets/light-logo.svg';

import { Logo } from '../Logo';

import { LeftNav } from './components/LeftNav';
import { TopBarStyled } from './styled';

export function TopBar() {
  return (
    <TopBarStyled>
      <Logo type={LogoImage} />
      <LeftNav />
    </TopBarStyled>
  );
}
