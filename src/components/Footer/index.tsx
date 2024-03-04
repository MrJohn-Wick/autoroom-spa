import DarkLogo from '@autrm/assets/dark-logo.svg';
import EmailIcon from '@autrm/assets/icons/email.svg';
import BelcardInternetPass from '@autrm/assets/icons/pays/belcard-internet-pass.png';
import Belcard from '@autrm/assets/icons/pays/belcard.png';
import BePaid from '@autrm/assets/icons/pays/bepaid.png';
import Erip from '@autrm/assets/icons/pays/erip.png';
import GPay from '@autrm/assets/icons/pays/g-pay.png';
import MastercardIDCheck from '@autrm/assets/icons/pays/mastercard-idcheck.png';
import Mastercard from '@autrm/assets/icons/pays/mastercard.png';
import MirAccept from '@autrm/assets/icons/pays/mir-accept.png';
import Mir from '@autrm/assets/icons/pays/mir.png';
import SamsungPay from '@autrm/assets/icons/pays/samsung-pay.png';
import VisaSecure from '@autrm/assets/icons/pays/visa-secure.png';
import Visa from '@autrm/assets/icons/pays/visa.png';
import YaPay from '@autrm/assets/icons/pays/ya-pay.png';
import PhoneIcon from '@autrm/assets/icons/phone.svg';
import { useWindowSize } from '@autrm/common/hooks/useWindowSize';
import { getEmail, getEmailDisplay, getPhone, getPhoneDisplay } from '@autrm/datas/contacts';

import { Logo } from '../Logo';

import { Copyright } from './components/Copyright/Copyright';
// import { FooterMenu } from './components/FooterMenu';
// import { FooterWidget } from './components/FooterWidget';
import { Hotline } from './components/Hotline';
import { SocialLinks } from './components/SocialLinks/SocialLinks';
import {
  // BottomMenuStyled,
  // ColStyled,
  ContactsStyled,
  FooterBottomStyled,
  FooterCenterStyled,
  FooterContainerStyled,
  FooterPaysStyled,
  FooterStyled,
  PayStyled,
  // FooterTopStyled,
  // RowStyled,
} from './styled';

export function Footer() {
  const { isMobileView } = useWindowSize();

  // const company_links = [
  //   {
  //     title: 'About us',
  //     url: '#',
  //   },
  //   {
  //     title: 'Return & exchange',
  //     url: '#',
  //   },
  //   {
  //     title: 'Refuund Plicy',
  //     url: '#',
  //   },
  //   {
  //     title: 'Reviews',
  //     url: '#',
  //   },
  //   {
  //     title: "FAQ's",
  //     url: '#',
  //   },
  //   {
  //     title: 'Contact Us',
  //     url: '#',
  //   },
  // ];

  return (
    <FooterStyled>
      {/* Footer top */}
      <FooterContainerStyled>
        {/* <FooterTopStyled>
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
        </FooterTopStyled> */}
        {/* Footer center */}
        <FooterCenterStyled>
          <div>
            <Logo type={DarkLogo} />
          </div>
          <ContactsStyled>
            <Hotline
              icon={PhoneIcon}
              title="Позвонить"
              href={'tel:' + getPhone()}
              link={getPhoneDisplay()}
            />
            <Hotline
              icon={EmailIcon}
              title="Написать"
              href={'mailto:' + getEmail()}
              link={getEmailDisplay()}
            />
          </ContactsStyled>
          {/* <div>
            <BottomMenuStyled>
              <li>
                <a href="#">Our Sitemap</a>
              </li>
            </BottomMenuStyled>
          </div> */}
        </FooterCenterStyled>
        <FooterPaysStyled>
          <PayStyled>
            <img
              src={Visa}
              alt=""
            />
          </PayStyled>
          <PayStyled>
            <img
              src={VisaSecure}
              alt=""
            />
          </PayStyled>
          <PayStyled>
            <img
              src={Mastercard}
              alt=""
            />
          </PayStyled>
          <PayStyled>
            <img
              src={MastercardIDCheck}
              alt=""
            />
          </PayStyled>
          <PayStyled>
            <img
              src={Belcard}
              alt=""
            />
          </PayStyled>
          <PayStyled>
            <img
              src={BelcardInternetPass}
              alt=""
            />
          </PayStyled>
          <PayStyled>
            <img
              src={Mir}
              alt=""
            />
          </PayStyled>
          <PayStyled>
            <img
              src={MirAccept}
              alt=""
            />
          </PayStyled>
          <PayStyled>
            <img
              src={BePaid}
              alt=""
            />
          </PayStyled>
          <PayStyled>
            <img
              src={SamsungPay}
              alt=""
            />
          </PayStyled>
          <PayStyled>
            <img
              src={YaPay}
              alt=""
            />
          </PayStyled>
          <PayStyled>
            <img
              src={GPay}
              alt=""
            />
          </PayStyled>
          <PayStyled>
            <img
              src={Erip}
              alt=""
            />
          </PayStyled>
        </FooterPaysStyled>
        {/* Footer bottom */}
        <FooterBottomStyled>
          <Copyright />
          {!isMobileView && <SocialLinks />}
        </FooterBottomStyled>
      </FooterContainerStyled>
    </FooterStyled>
  );
}
