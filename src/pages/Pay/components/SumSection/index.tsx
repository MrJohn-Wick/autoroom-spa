import { HeadingLevel3 } from '@autrm/common/tokens/typography';

import {
  CompanyStyled,
  CurrencyStyled,
  LineStyled,
  PriceAmountStyled,
  PriceLabelStyled,
  PriceStyled,
  SumSectionStyled,
} from './styled';

export function SumSection() {
  return (
    <SumSectionStyled>
      <HeadingLevel3>Оплата услуги</HeadingLevel3>
      <CompanyStyled>ЧУП "ВитЛайк Кофе" г. Витебск ул. Петруся Бровки, 4Б</CompanyStyled>
      <LineStyled />
      <PriceStyled>
        <PriceLabelStyled>Итого к оплате</PriceLabelStyled>
        <PriceAmountStyled>
          1210<CurrencyStyled>бел.руб.</CurrencyStyled>
        </PriceAmountStyled>
      </PriceStyled>
    </SumSectionStyled>
  );
}
