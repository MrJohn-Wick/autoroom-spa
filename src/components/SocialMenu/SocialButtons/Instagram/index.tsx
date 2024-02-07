import { SVGIcon } from '@autrm/common/components/svg-icon';
import InstagramIcon from '@autrm/assets/icons/instagram.svg';
import { InstagramButtonStyled } from './styled';

export function Instagram({ isOpen }: { isOpen: boolean }) {
  return (
    <InstagramButtonStyled isOpen={isOpen}>
      <a href="https://instagram.com">
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
