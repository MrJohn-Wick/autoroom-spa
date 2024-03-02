import InstagramIcon from '@autrm/assets/icons/instagram.svg';
import { SVGIcon } from '@autrm/common/components/svg-icon';
import { getInstagramUrl } from '@autrm/datas/contacts';

import { InstagramButtonStyled } from './styled';

export function Instagram({ isOpen }: { isOpen: boolean }) {
  return (
    <InstagramButtonStyled isOpen={isOpen}>
      <a href={getInstagramUrl()}>
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
