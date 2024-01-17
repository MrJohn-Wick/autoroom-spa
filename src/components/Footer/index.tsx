import DarkLogo from '@autrm/assets/dark-logo.svg';

import { Logo } from '../Logo';

import { Copyright } from './components/Copyright/Copyright';
import { FooterMenu } from './components/FooterMenu';
import { FooterWidget } from './components/FooterWidget';
import { Hotline } from './components/Hotline';
import { SocialLinks } from './components/SocialLinks/SocialLinks';
import {
  BottomMenuStyled,
  ColStyled,
  ContactsStyled,
  FooterBottomStyled,
  FooterCenterStyled,
  FooterContainerStyled,
  FooterStyled,
  FooterTopStyled,
  RowStyled,
} from './styled';

export function Footer() {
  const company_links = [
    {
      title: 'About us',
      url: '#',
    },
    {
      title: 'Return & exchange',
      url: '#',
    },
    {
      title: 'Refuund Plicy',
      url: '#',
    },
    {
      title: 'Reviews',
      url: '#',
    },
    {
      title: "FAQ's",
      url: '#',
    },
    {
      title: 'Contact Us',
      url: '#',
    },
  ];

  return (
    <FooterStyled>
      {/* Footer top */}
      <FooterContainerStyled>
        <FooterTopStyled>
          <RowStyled>
            <ColStyled>
              <FooterWidget title="About company">
                <FooterMenu links={company_links} />
              </FooterWidget>
            </ColStyled>
            <ColStyled>
              <FooterWidget title="Search & Explore">
                <FooterMenu links={company_links} />
              </FooterWidget>
            </ColStyled>
            <ColStyled>
              <FooterWidget title="Car By Brands">
                <FooterMenu links={company_links} />
              </FooterWidget>
            </ColStyled>
            <ColStyled>
              <FooterWidget title="Car By Location">
                <FooterMenu links={company_links} />
              </FooterWidget>
            </ColStyled>
            <ColStyled>
              <FooterWidget title="Download App">
                <span>App</span>
              </FooterWidget>
            </ColStyled>
          </RowStyled>
        </FooterTopStyled>
        {/* Footer center */}
        <FooterCenterStyled>
          <div>
            <Logo type={DarkLogo} />
          </div>
          <ContactsStyled>
            <Hotline
              icon="i"
              title="Позвонить"
              href="tel:+375291524415"
              link="+375 (29) 152-44-15"
            />
            <Hotline
              icon="i"
              title="Написать"
              href="mailto:"
              link="info@gmail.com"
            />
          </ContactsStyled>
          <div>
            <BottomMenuStyled>
              <li>
                <a href="#">Our Sitemap</a>
              </li>
            </BottomMenuStyled>
          </div>
        </FooterCenterStyled>
        {/* Footer bottom */}
        <FooterBottomStyled>
          <Copyright />
          <SocialLinks />
        </FooterBottomStyled>
      </FooterContainerStyled>
    </FooterStyled>
  );
}
