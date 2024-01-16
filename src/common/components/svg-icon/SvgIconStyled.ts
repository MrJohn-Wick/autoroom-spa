import styled, { css } from 'styled-components';

import { CORNER_RADIUS } from '../../tokens/cornerRadius';

import { TSvgIconProps } from './types';

export const SVGIconStyled = styled.span<TSvgIconProps>`
  display: flex;

  ${({ order }) => order && `order: ${order};`}
  ${({ iconRotate }) => iconRotate && `transform: rotate(${iconRotate}deg);`};
  ${({ isButton }) => isButton && 'cursor: pointer;'}

  ${({ sizes }) => sizes && css`
    width: ${sizes.w};
    height: ${sizes.h};
  `}

  & path {
    ${({ pathFill }) => pathFill && `fill: ${pathFill};`}
    ${({ stroke }) => stroke && `stroke: ${stroke};`}
  }

  ${({ rectFill }) =>
    rectFill &&
    `
    & > svg > rect {
      fill: ${rectFill};
    }
  `}

  ${({ isHoverEffect }) =>
    isHoverEffect &&
    css`
      @media (hover: hover) and (pointer: fine) {
        &:hover {
          background-color: #ccc;
          border-radius: ${CORNER_RADIUS.l};
        }
      }
    `}

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: #ccc;
      border-radius: ${CORNER_RADIUS.circle};
    `}
`;
