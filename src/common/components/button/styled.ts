import { colorPrimary } from '@autrm/common/tokens/colors';
import styled from 'styled-components';

export const ButtonStyled = styled.button`
  border-radius: 5px;
  background-color: ${colorPrimary};
  font-weight: 600;
  font-size: 13px;
  color: #fff;
  padding: 12px 20px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transition: 0.5s;
  position: relative;
  overflow: hidden;
  z-index: 1;
  white-space: nowrap;

  outline: none;
  border: none;
  cursor: pointer;
  text-transform: none;

  svg {
    fill: #fff;
  }

  &:hover::after {
    transform: skewX(45deg) scale(1, 1);
  }

  &::after {
    position: absolute;
    content: "";
    display: block;
    left: 15%;
    right: -20%;
    top: -4%;
    height: 150%;
    width: 150%;
    bottom: 0;
    border-radius: 2px;
    background-color: #0A1019;
    transform: skewX(45deg) scale(0, 1);
    z-index: -1;
    transition: all 0.5s ease-out 0s;
  }
`;