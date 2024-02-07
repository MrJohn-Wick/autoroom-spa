import { styled } from 'styled-components';
import { RoundIcon } from '@autrm/components/SocialMenu/styled';
import { colorInstagram } from '@autrm/common/tokens/colors';

export const InstagramButtonStyled = styled.div<{ isOpen: boolean }>`
  ${RoundIcon};
  background: ${colorInstagram};
  transition: all 0.1s;
  width: ${(props) => (props.isOpen ? '80px' : '0px')};
  height: ${(props) => (props.isOpen ? '80px' : '0px')};
  /* background: radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  ); */
`;
