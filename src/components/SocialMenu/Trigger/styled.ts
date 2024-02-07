import { SVGIcon } from '@autrm/common/components/svg-icon';
import { colorPrimary } from '@autrm/common/tokens/colors';
import { styled } from 'styled-components';
import { RoundIcon } from '../styled';

export const TriggerIconStyled = styled(SVGIcon)<{ isOpen: boolean }>`
  background-color: ${colorPrimary};
  ${RoundIcon}
  transform: ${(props) => (props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: all 0.2s;
`;
