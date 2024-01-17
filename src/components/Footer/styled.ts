import { colorWhite, colorGrey200 } from '@autrm/common/tokens/colors';
import { getTextStyles } from '@autrm/common/utils/styles';
import styled from 'styled-components';

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
  justify-content: center !important;

  & > * {
    flex: 0 0 auto;
    width: 20%;
    margin-top: 24px;
  }

  @media (min-width: 992px) {
  & > * {
    flex: 0 0 auto;
    width: 25%;
  }

`;

export const ColStyled = styled.div`
  display: flex !important;
  justify-content: flex-center !important;
  padding: 0 12px;

  &:first-child {
    justify-content: flex-start !important;
    padding-left: 0;
  }

  &:last-child {
    justify-content: flex-end !important;
    padding-right: 0;
  }
`;

export const FooterCenterStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8% 35px;

  @media (max-width: 991px) {
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

  @media (max-width: 1199px) {
    gap: 40px;
  }

  @media (max-width: 767px) {
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
    ${getTextStyles('OpenSans', 600, 15, null)};
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

  @media (max-width: 767px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
  }
  @media (max-width: 991px) {
    padding: 17px 2%;
  }
`;
