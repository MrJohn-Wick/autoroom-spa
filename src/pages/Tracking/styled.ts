import styled from 'styled-components';

import { Col, Row } from '@autrm/common/components/grid';
import { ADAPTIVE } from '@autrm/common/tokens/screen';
import { getTextStyles } from '@autrm/common/utils/styles';

export const ColStyled = styled(Col)`
  /* display: flex;
  justify-content: space-between; */
  border-radius: 10px;
  border: 1px solid #d2d3d3;

  padding: 20px 0;

  ${ADAPTIVE.minWidth.tablet} {
    padding: 30px 0px;
  }

  img {
    cursor: pointer;
  }
`;

export const ColLabelStyled = styled(Col)`
  ${getTextStyles('Open Sans', 700, 15, 15)}
  margin: 8px;
`;

export const ColValueStyled = styled(Col)`
  ${getTextStyles('Open Sans', 500, 14, 15)}
  margin: 8px;
`;

export const RowStyled = styled(Row)`
  margin: 0 8px 16px 8px;
`;
