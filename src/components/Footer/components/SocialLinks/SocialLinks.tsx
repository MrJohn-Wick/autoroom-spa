import { SocialLinksStyled, SocialListksTitleStyled, IconsListStyled } from './styled';

export function SocialLinks() {
  return (
    <SocialLinksStyled>
      <SocialListksTitleStyled>Follow Drivco:</SocialListksTitleStyled>
      <IconsListStyled>
        <li>
          <a href="https://www.facebook.com/">
            <i className="bx bxl-facebook" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/">
            <i className="bx bxl-twitter" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/">
            <i className="bx bxl-linkedin" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/">
            <i className="bx bxl-instagram-alt" />
          </a>
        </li>
      </IconsListStyled>
    </SocialLinksStyled>
  );
}
