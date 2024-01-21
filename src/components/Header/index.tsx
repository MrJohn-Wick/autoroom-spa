import { useWindowSize } from '@autrm/common/hooks/useWindowSize';

import { MobileTopBar } from './components/MobileTopBar';
import { NavBar } from './components/NavBar';
import { TopBar } from './components/TopBar';

export function Header() {
  const { isDesktopView } = useWindowSize();

  return isDesktopView ? (
    <>
      <TopBar />
      <NavBar />
    </>
  ) : (
    <MobileTopBar />
  );
}
