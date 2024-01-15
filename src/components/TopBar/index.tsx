import { TopBarStyled } from './styled';
import LogoImage from '@autrm/assets/light-logo.svg';


import { LeftNav } from './components/LeftNav';
import { Logo } from '../Logo';

export function TopBar() {
  return (
    <TopBarStyled>
      <Logo type={LogoImage} />
      <LeftNav />
    </TopBarStyled>
  );
}