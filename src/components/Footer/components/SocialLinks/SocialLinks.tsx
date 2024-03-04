import InstagramIcon from '@autrm/assets/icons/social/instagram-vector-2.svg';
import TelegramIcon from '@autrm/assets/icons/social/telegram-vector.svg';
import { SVGIcon } from '@autrm/common/components/svg-icon';
import { getInstagramUrl, getTelegramUrl } from '@autrm/datas/contacts';

import { SocialLinksStyled, SocialListksTitleStyled, IconsListStyled } from './styled';
// import FacebookIcon from '@autrm/assets/icons/social/facebook.svg';
// import TwitterIcon from '@autrm/assets/icons/social/twitter.svg';
// import LinkedinIcon from '@autrm/assets/icons/social/linkedin.svg';

export function SocialLinks() {
  return (
    <SocialLinksStyled>
      <SocialListksTitleStyled>Наши соцсети:</SocialListksTitleStyled>
      <IconsListStyled>
        {/* <li>
          <a href="https://www.facebook.com/">
            <SVGIcon
              type={FacebookIcon}
              sizes={{
                w: '16px',
                h: '16px',
              }}
            />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/">
            <SVGIcon
              type={TwitterIcon}
              sizes={{
                w: '16px',
                h: '16px',
              }}
            />
          </a>
        </li> */}
        {/* <li>
          <a href="https://www.linkedin.com/">
            <SVGIcon
              type={LinkedinIcon}
              sizes={{
                w: '16px',
                h: '16px',
              }}
            />
          </a>
        </li> */}
        <li>
          <a href={getInstagramUrl()}>
            <SVGIcon
              type={InstagramIcon}
              sizes={{
                w: '36px',
                h: '36px',
              }}
            />
          </a>
        </li>
        <li>
          <a href={getTelegramUrl()}>
            <SVGIcon
              type={TelegramIcon}
              sizes={{
                w: '36px',
                h: '36px',
              }}
            />
          </a>
        </li>
      </IconsListStyled>
    </SocialLinksStyled>
  );
}
