import {
  SocialLinksStyled,
  SocialListksTitleStyled,
  IconsListStyled,
} from './styled';

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
            <i className="bx bxl-twitter"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/">
            <i className="bx bxl-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/">
            <i className="bx bxl-instagram-alt"></i>
          </a>
        </li>
      </IconsListStyled>
    </SocialLinksStyled>
  );
}
