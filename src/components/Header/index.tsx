import { useWindowSize } from '@autrm/common/hooks/useWindowSize';

import { MobileTopBar } from './components/MobileTopBar';
import { NavBar } from './components/NavBar';
import { TopBar } from './components/TopBar';

export function Header() {
  const { isInfiniteDesktopView } = useWindowSize();

  return isInfiniteDesktopView ? (
    <>
      <TopBar />
      <NavBar />
    </>
  ) : (
    <MobileTopBar />
  );
}
