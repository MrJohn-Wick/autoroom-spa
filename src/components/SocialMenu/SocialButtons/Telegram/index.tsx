import TelegramIcon from '@autrm/assets/icons/telegram.svg';
import { SVGIcon } from '@autrm/common/components/svg-icon';
import { getTelegramUrl } from '@autrm/datas/contacts';

import { TelegramButtonStyled } from './styled';

export function Telegram({ isOpen }: { isOpen: boolean }) {
  return (
    <TelegramButtonStyled isOpen={isOpen}>
      <a href={getTelegramUrl()}>
        <SVGIcon
          type={TelegramIcon}
          sizes={{
            w: '48px',
            h: '48px',
          }}
        />
      </a>
    </TelegramButtonStyled>
  );
}
