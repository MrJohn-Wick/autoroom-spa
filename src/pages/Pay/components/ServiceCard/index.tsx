import DollarIcon from '@autrm/assets/icons/pays/dollar-sign.svg';
import { SVGIcon } from '@autrm/common/components/svg-icon';

import {
  CurrencyStyled,
  PriceStyled,
  ServiceCardIconStyled,
  ServiceCardStyled,
  TitleStyled,
} from './styled';

export function ServiceCard({
  title,
  amount,
  image,
}: {
  title: string;
  amount: number;
  image?: string;
}) {
  return (
    <ServiceCardStyled>
      <ServiceCardIconStyled>
        {image ? (
          <img
            src={image}
            alt=""
          />
        ) : (
          <SVGIcon
            type={DollarIcon}
            sizes={{
              w: '48',
              h: '48',
            }}
          />
        )}
      </ServiceCardIconStyled>
      <TitleStyled>{title}</TitleStyled>
      <PriceStyled>
        {amount}
        <CurrencyStyled> бел. руб. (BYN)</CurrencyStyled>
      </PriceStyled>
    </ServiceCardStyled>
  );
}