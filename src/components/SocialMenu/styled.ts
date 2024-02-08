import { styled } from 'styled-components';

import { SVGIcon } from '@autrm/common/components/svg-icon';
import { colorPrimary, colorWhite } from '@autrm/common/tokens/colors';

export const SocialMenuStyled = styled.div`
  position: fixed;
  bottom: 50px;
  right: 70px;
`;

export const SocialMenuTriggerStyled = styled(SVGIcon)`
  display: flex;
  background-color: ${colorPrimary};
`;

export const DropdownStyled = styled.div`
  position: absolute;
  bottom: 80px;
  left: 0;

  & ul {
    list-style: none;
  }

  & ul li {
    margin-bottom: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
  }
`;

export const RoundIcon = `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.33);
  color: ${colorWhite};
`;
