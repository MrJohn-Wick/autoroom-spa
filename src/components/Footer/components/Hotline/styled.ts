import { colorGrey200, colorPrimary, colorWhite } from '@autrm/common/tokens/colors';
import { getTextStyles } from '@autrm/common/utils/styles';
import { styled } from 'styled-components';

export const HotlineStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const IconStyled = styled.div`
  position: relative;

  &::after {
    content: '';
    width: 1px;
    height: 40px;
    background-color: hsla(0, 0%, 100%, 0.2);
    position: absolute;
    right: -11px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const ContentStyled = styled.div`
  line-height: 1;

  & span {
    color: ${colorGrey200};
    ${getTextStyles('OpenSans', 600, 14, 1)}
    display: inline-block;
    margin-bottom: 10px;
  }
  & h6 a {
    color: ${colorPrimary};
    ${getTextStyles('Montserrat', 600, 20, null)}
    transition: 0.35s;
  }
  & h6 a:hover {
    color: ${colorWhite};
  }
`;
