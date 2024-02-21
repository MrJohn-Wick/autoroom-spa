import InstaIcon from '@autrm/assets/icons/instagram.svg';
import LogoImage from '@autrm/assets/light-logo.svg';
import { Button } from '@autrm/common/components/button';
import { SVGIcon } from '@autrm/common/components/svg-icon';
import { FollowStyled, LinkStyled, SubTitleStyled, TitleStyled } from './styled';

export function InstaBranding() {
  return (
    <FollowStyled>
      <SVGIcon
        type={LogoImage}
        sizes={{
          w: '100%',
          h: 'auto',
        }}
      />
      <TitleStyled>@autoroom_by</TitleStyled>
      <SubTitleStyled>
        Автомобили и Мотоциклы со страховых аукционов США Copart, IAAI. Подберем, доставим, а также
        окажем помощь в растаможке.
      </SubTitleStyled>
      <LinkStyled href="https://instagram.com/autoroom_by">
        <Button>
          <SVGIcon
            type={InstaIcon}
            sizes={{
              w: '15px',
              h: '15px',
            }}
          />
          <span>Подписывайся</span>
        </Button>
      </LinkStyled>
    </FollowStyled>
  );
}
