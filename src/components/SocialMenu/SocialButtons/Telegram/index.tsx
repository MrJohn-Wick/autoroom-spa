import { SVGIcon } from '@autrm/common/components/svg-icon';
import TelegramIcon from '@autrm/assets/icons/telegram.svg';
import { TelegramButtonStyled } from './styled';

export function Telegram({ isOpen }: { isOpen: boolean }) {
  return (
    <TelegramButtonStyled isOpen={isOpen}>
      <a href="https://telegram.org">
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
