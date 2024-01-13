import styled from 'styled-components';

export const FooterStyled = styled.footer`
    background-color: hsl(231.4, 15.6%, 8.8%);
    border-radius: 30px 30px 0 0;
    color: #fff;
`;

export const FooterContainerStyled = styled.div`
  width: 100%;
  padding-right: .75rem;
  padding-left: .75rem;
  margin-right: auto;
  margin-left: auto;
`;

export const FooterTopStyled = styled.div`
    padding: 90px 11%;
`;

export const FooterBottomStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid hsla(0,0%,100%,.05);
    padding: 17px 11%;

    @media (max-width: 767px) {
        flex-wrap: wrap;
        justify-content: center;
        gap: 12px;
    }
    @media (max-width: 991px) {
        padding: 17px 2%;
    }
`;