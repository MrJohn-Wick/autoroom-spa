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
        src={iX}
        width="1066"
        height="336"
        alt=""
      />
    </HeroSectionStyled>
  );
}
