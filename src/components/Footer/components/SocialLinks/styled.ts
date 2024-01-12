import { styled } from "styled-components";

export const SocialLinksStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`;

export const SocialListksTitleStyled = styled.div`
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 0;
`;

export const IconsListStyled = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  gap: 15px;

  & li a {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    border-radius: 15px;
    border: 1px solid hsla(0,0%,100%,.2);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary-color1);
    transition: .35s;
  }
`;