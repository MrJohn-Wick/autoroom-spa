import styled from 'styled-components';

import { colorPrimary, colorText } from '@autrm/common/tokens/colors';
import { getTextStyles } from '@autrm/common/utils/styles';

export const LeftMenuStyled = styled.div`
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
    gap: 30px;
  }

  li {
    list-style: none;
  }

  a {
    color: ${colorText};
    ${getTextStyles('Open Sans', 600, 13, null)}
    transition: .35s;
    white-space: nowrap;

    &:hover {
      color: ${colorPrimary};
    }
  }
`;
