import InstagramIcon from '@autrm/assets/icons/instagram.svg';
import { SVGIcon } from '@autrm/common/components/svg-icon';

import { InstagramButtonStyled } from './styled';

export function Instagram({ isOpen }: { isOpen: boolean }) {
  return (
    <InstagramButtonStyled isOpen={isOpen}>
      <a href="https://www.instagram.com/autoroom_by/">
        <SVGIcon
          type={InstagramIcon}
          sizes={{
            w: '48px',
            h: '48px',
          }}
        />
      </a>
    </InstagramButtonStyled>
  );
}
