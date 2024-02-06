import iX from '@autrm/assets/bmw_ix.png';
import { Search } from '@autrm/components/Search';

import { HeadingLevel1Styled, HeroSectionStyled, RegularTextLevel1Styled } from './styled';

export function HeroSection() {
  return (
    <HeroSectionStyled>
      <HeadingLevel1Styled>Авто из США</HeadingLevel1Styled>
      <RegularTextLevel1Styled>Подберем авто Вашей мечты</RegularTextLevel1Styled>
      <Search />
      <img
        // @ts-ignore
        fetchpriority="high"
        decoding="async"
        width="1166"
        height="356"
        src={iX}
        class="attachment-full size-full wp-image-5583"
        alt=""
        srcset={iX}
        sizes="(max-width: 1166px) 100vw, 1166px"
      />
    </HeroSectionStyled>
  );
}
