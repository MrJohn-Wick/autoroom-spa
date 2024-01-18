import PhoneIcon from '@autrm/assets/icons/phone.svg';
import { SVGIcon } from '@autrm/common/components/svg-icon';

import {
  PhoneIconStyled,
  PhoneNumberStyled,
  PhoneTextStyled,
  RightNavStyled,
  SeparatorStyled,
} from './styled';

export function RightNav() {
  return (
    <RightNavStyled>
      <PhoneIconStyled>
        <SVGIcon
          type={PhoneIcon}
          sizes={{
            w: '28px',
            h: '28px',
          }}
        />
      </PhoneIconStyled>
      <SeparatorStyled />
      <PhoneNumberStyled>
        <PhoneTextStyled>Свяжитесь с нами</PhoneTextStyled>
        <a href="tel:+375291524415">+375 (29) 152-44-15</a>
      </PhoneNumberStyled>
    </RightNavStyled>
  );
}
