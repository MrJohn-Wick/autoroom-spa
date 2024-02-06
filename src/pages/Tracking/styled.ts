import styled from 'styled-components';

import { Col } from '@autrm/common/components/grid';
import { getTextStyles } from '@autrm/common/utils/styles';

export const ColStyled = styled(Col)`
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  border: 1px solid #d2d3d3;
  padding: 30px 20px;

  ul {
    list-style: none;
    width: 100%;
  }

  li:first-child {
    padding-top: 0;
  }

  li {
    ${getTextStyles('Open Sans', 700, 15, 15)}
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 18px 0 10px;

    span {
      font-weight: 500;
    }
  }

  img {
    cursor: pointer;
  }
`;
