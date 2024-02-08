import { styled } from 'styled-components';
import { RoundIcon } from '@autrm/components/SocialMenu/styled';

export const TelegramButtonStyled = styled.div<{ isOpen: boolean }>`
  ${RoundIcon}
  background: rgb(39, 165, 231);
  transition: all 0.1s;
  width: ${(props) => (props.isOpen ? '80px' : '0px')};
  height: ${(props) => (props.isOpen ? '80px' : '0px')};
`;
