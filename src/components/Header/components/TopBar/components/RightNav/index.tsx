// import PhoneIcon from '@autrm/assets/icons/phone.svg';
import { Link } from 'react-router-dom';

import InstagramIcon from '@autrm/assets/icons/social/instagram-vector.svg';
import TelegramIcon from '@autrm/assets/icons/social/telegram-vector.svg';
import { SVGIcon } from '@autrm/common/components/svg-icon';

import { PhoneNumberStyled, PhoneTextStyled, RightNavStyled, SeparatorStyled } from './styled';

export function RightNav() {
  return (
    <RightNavStyled>
      {/* <PhoneIconStyled>
        
      </PhoneIconStyled> */}
      <Link to="https://www.instagram.com/autoroom_by/">
        <SVGIcon
          type={InstagramIcon}
          sizes={{
            w: '28px',
            h: '28px',
          }}
        />
      </Link>
      <Link to="https://t.me/autoroomby">
        <SVGIcon
          type={TelegramIcon}
          sizes={{
            w: '28px',
            h: '28px',
          }}
        />
      </Link>
      <SeparatorStyled />
      <PhoneNumberStyled>
        <PhoneTextStyled>Свяжитесь с нами</PhoneTextStyled>
        <a href="tel:+375291524415">+375 (29) 152-44-15</a>
      </PhoneNumberStyled>
    </RightNavStyled>
  );
}
