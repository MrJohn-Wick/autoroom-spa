import { SVGIcon } from '@autrm/common/components/svg-icon';
import { SocialLinksStyled, SocialListksTitleStyled, IconsListStyled } from './styled';
import FacebookIcon from '@autrm/assets/icons/social/facebook.svg';
import TwitterIcon from '@autrm/assets/icons/social/twitter.svg';
import LinkedinIcon from '@autrm/assets/icons/social/linkedin.svg';
import InstagramIcon from '@autrm/assets/icons/social/instagram.svg';

export function SocialLinks() {
  return (
    <SocialLinksStyled>
      <SocialListksTitleStyled>Follow as:</SocialListksTitleStyled>
      <IconsListStyled>
        <li>
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
        </li>
        <li>
          <a href="https://www.linkedin.com/">
            <SVGIcon
              type={LinkedinIcon}
              sizes={{
                w: '16px',
                h: '16px',
              }}
            />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/">
            <SVGIcon
              type={InstagramIcon}
              sizes={{
                w: '16px',
                h: '16px',
              }}
            />
          </a>
        </li>
      </IconsListStyled>
    </SocialLinksStyled>
  );
}
