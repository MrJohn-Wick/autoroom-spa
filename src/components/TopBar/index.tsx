import { TopBarStyled } from './styled';

import { LeftNav } from './components/LeftNav';
import { Logo } from './components/Logo';

export function TopBar() {
  return (
    <TopBarStyled>
      <Logo />
      <LeftNav />
    </TopBarStyled>
  );
}