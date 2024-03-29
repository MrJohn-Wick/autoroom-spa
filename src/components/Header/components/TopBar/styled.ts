import styled from 'styled-components';

import { colorWhite } from '@autrm/common/tokens/colors';

export const TopBarStyled = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 8%;
  gap: 30px;
  border-bottom: 1px solid #eee;
  background: ${colorWhite};

  @media (min-width: 1400px) and (max-width: 1599px) {
    padding: 15px 3%;
  }
  @media (max-width: 1399px) {
    padding: 15px 3%;
  }
  @media (max-width: 991px) {
    display: none;
    visibility: hidden;
  }
`;
