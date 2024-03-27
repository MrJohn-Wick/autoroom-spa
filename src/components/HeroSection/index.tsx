// import iX from '@autrm/assets/bmw_ix.png';
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
          {/* <img
            src={iX}
            width="1066"
            height="336"
            alt=""
          /> */}
          <img
            // @ts-ignore
            fetchpriority="high"
            decoding="async"
            width="1166"
            height="356"
            src="https://demoapus1.com/boxcar/wp-content/uploads/2023/11/slider51.png"
            class="attachment-full size-full wp-image-5583"
            alt=""
            srcset="https://demoapus1.com/boxcar/wp-content/uploads/2023/11/slider51.png 1166w, https://demoapus1.com/boxcar/wp-content/uploads/2023/11/slider51-300x92.png 300w, https://demoapus1.com/boxcar/wp-content/uploads/2023/11/slider51-1024x313.png 1024w, https://demoapus1.com/boxcar/wp-content/uploads/2023/11/slider51-768x234.png 768w, https://demoapus1.com/boxcar/wp-content/uploads/2023/11/slider51-600x183.png 600w"
            sizes="(max-width: 1166px) 100vw, 1166px"
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
          {/* <img
            src={iX}
            width="1066"
            height="336"
            alt=""
          /> */}
          <img
            // @ts-ignore
            fetchpriority="high"
            decoding="async"
            width="1166"
            height="356"
            src="https://demoapus1.com/boxcar/wp-content/uploads/2023/11/slider51.png"
            alt=""
            srcset="https://demoapus1.com/boxcar/wp-content/uploads/2023/11/slider51.png 1166w, https://demoapus1.com/boxcar/wp-content/uploads/2023/11/slider51-300x92.png 300w, https://demoapus1.com/boxcar/wp-content/uploads/2023/11/slider51-1024x313.png 1024w, https://demoapus1.com/boxcar/wp-content/uploads/2023/11/slider51-768x234.png 768w, https://demoapus1.com/boxcar/wp-content/uploads/2023/11/slider51-600x183.png 600w"
            sizes="(max-width: 1166px) 100vw, 1166px"
          />
        </>
      )}
    </HeroSectionStyled>
  );
}
