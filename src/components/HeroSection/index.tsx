import iX from '@autrm/assets/bmw_ix.png';
import { useWindowSize } from '@autrm/common/hooks/useWindowSize';
import { Search } from '@autrm/components/Search';

import { SearchMobile } from '../SearchMobile';

import {
  HeadingLevel1Styled,
  HeroSectionStyled,
  MobileSearchSectionStyled,
  RegularTextLevel1Styled,
} from './styled';

export function HeroSection() {
  const { isInfiniteDesktopView, isMiddleDesktopView, isTabletView, isMobileView } =
    useWindowSize();

  return (
    <HeroSectionStyled>
      {(isTabletView || isMiddleDesktopView || isInfiniteDesktopView) && (
        <>
          <HeadingLevel1Styled>Авто из США</HeadingLevel1Styled>
          <RegularTextLevel1Styled>Подберем авто Вашей мечты</RegularTextLevel1Styled>
          <Search />
          <img
            src={iX}
            width="1066"
            height="336"
            alt=""
          />
        </>
      )}
      {isMobileView && (
        <>
          <HeadingLevel1Styled>Авто из США</HeadingLevel1Styled>
          <RegularTextLevel1Styled>Подберем авто Вашей мечты</RegularTextLevel1Styled>
          <MobileSearchSectionStyled>
            <SearchMobile />
          </MobileSearchSectionStyled>
          <img
            src={iX}
            width="1066"
            height="336"
            alt=""
          />
        </>
      )}
    </HeroSectionStyled>
  );
}
