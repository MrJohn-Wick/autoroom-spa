import { colorWhite, colorGrey200 } from '@autrm/common/tokens/colors';
import { ADAPTIVE } from '@autrm/common/tokens/screen';
import { getTextStyles } from '@autrm/common/utils/styles';
import styled from 'styled-components';

import { colorWhite, colorGrey200 } from '@autrm/common/tokens/colors';
import { ADAPTIVE } from '@autrm/common/tokens/screen';
import { getTextStyles } from '@autrm/common/utils/styles';

export const FooterStyled = styled.footer`
  background-color: hsl(231.4, 15.6%, 8.8%);
  border-radius: 30px 30px 0 0;
  color: #fff;
`;

export const FooterContainerStyled = styled.div`
  width: 100%;
  padding-right: 0.75rem;
  padding-left: 0.75rem;
  margin-right: auto;
  margin-left: auto;
`;

export const FooterTopStyled = styled.div`
  padding: 90px 8%;

  @media (max-width: 991px) {
    padding: 90px 3%;
  }
`;

export const RowStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ColStyled = styled.div`
  display: flex !important;
  justify-content: flex-center !important;
  padding: 0 12px;
  flex-wrap: wrap;
  flex: 0 0 auto;

  ${ADAPTIVE.minWidth.mobile} {
    width: 100%;
    &:last-child {
      justify-content: flex-center !important;
      padding-right: 0;
    }
  }

  ${ADAPTIVE.minWidth.tablet} {
    width: 25%;
    &:nth-child(4) {
      justify-content: flex-end !important;
      padding-right: 0;
    }
  } 

  ${ADAPTIVE.minWidth.desktop} {
    width: 20%;
    &:first-child {
      justify-content: flex-start !important;
      padding-left: 0;
    }
    &:last-child {
      justify-content: flex-end;
      padding-right: 0;
    }
`;

export const FooterCenterStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8% 35px;

  ${ADAPTIVE.maxWidth.tablet} {
    padding: 0 3% 35px;
    flex-direction: column;
    gap: 40px;
  }
`;

export const ContactsStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 70px;

  ${ADAPTIVE.maxWidth.desktop} {
    gap: 40px;
  }

  ${ADAPTIVE.maxWidth.mobile} {
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
`;

export const BottomMenuStyled = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  line-height: 1;
  display: flex;
  align-items: center;
  gap: 50px;

  & li a {
    color: ${colorGrey200};
    ${getTextStyles('Open Sans', 600, 15, null)};
    transition: 0.35s;
  }
  & li a:hover {
    color: ${colorWhite};
  }
`;

export const FooterBottomStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid hsla(0, 0%, 100%, 0.05);
  padding: 17px 8%;
  font-size: 14px;
  font-weight: 400;
  font-family: var(--font-open-sans);

  ${ADAPTIVE.maxWidth.mobile} {
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
  }
  ${ADAPTIVE.maxWidth.tablet} {
    padding: 17px 2%;
  }
`;
