import { getTextStyles } from '@autrm/common/utils/styles';
import { styled } from 'styled-components';

export const ListStyled = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  & li {
    margin: 0;
    padding: 0;
    margin-bottom: 8px;
  }
  & li a {
    text-decoration: none;
    color: #b3b3b3;
    transition: 0.35s;
    display: flex;
    align-items: center;
    gap: 7px;
    transition: 0.35s;

    ${getTextStyles(null, 600, 15, null)}
  }

  & li a:hover {
    color: #fff;
  }
`;
