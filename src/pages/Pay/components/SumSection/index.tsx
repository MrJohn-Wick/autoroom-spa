import { HeadingLevel3 } from '@autrm/common/tokens/typography';

import { getServiceName } from './helpers';
import {
  CompanyStyled,
  CurrencyStyled,
  LineStyled,
  PriceAmountStyled,
  PriceLabelStyled,
  PriceStyled,
  ServiceLabelStyled,
  ServiceTypeStyled,
  SumSectionStyled,
} from './styled';

export function SumSection({ formState }: any) {
  return (
    <SumSectionStyled>
      <HeadingLevel3>Оплата услуги</HeadingLevel3>
      <CompanyStyled>ЧУП "ВитЛайк Кофе" г. Витебск ул. Петруся Бровки, 4Б</CompanyStyled>
      {formState.service && (
        <>
          <ServiceTypeStyled>Тип услуги</ServiceTypeStyled>
          <ServiceLabelStyled>{getServiceName(formState.service)}</ServiceLabelStyled>
        </>
      )}
      <LineStyled />
      <PriceStyled>
        <PriceLabelStyled>Итого к оплате</PriceLabelStyled>
        <PriceAmountStyled>
          {formState.price}
          <CurrencyStyled>бел.руб.</CurrencyStyled>
        </PriceAmountStyled>
      </PriceStyled>
    </SumSectionStyled>
  );
}
