import { styled } from 'styled-components';

export const UlStyled = styled.ul`
  margin: 0;
  list-style: none;
  gap: 24px;
  position: relative;
  column-count: 2;
  padding: 18px 0 10px;

  &::before {
    top: 0;
    content: '';
    background-color: #eee;
    position: absolute;
    left: 50%;
    height: 1px;
    width: 100%;
    transform: translateX(-50%);
  }

  &::after {
    bottom: 0;
    content: '';
    background-color: #eee;
    position: absolute;
    left: 50%;
    height: 1px;
    width: 100%;
    transform: translateX(-50%);
  }
`;

export const LiStyled = styled.li`
  display: flex;
  align-items: center;
  gap: 5px;
  font-family: var(--font-open-sans);
  font-weight: 600;
  font-size: 13px;
  line-height: 18px;
  color: var(--text-color);
  margin-bottom: 8px;
`;
