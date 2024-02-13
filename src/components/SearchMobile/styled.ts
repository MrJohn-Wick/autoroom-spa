import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { colorGrey200, colorPrimary, colorWhite } from '@autrm/common/tokens/colors';

export const SearchMobileStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;

  input {
    height: 40px;
    border-radius: 10px;
    padding: 0 10px;
    border: 1px solid ${colorGrey200};
  }
`;

export const ButtonStyled = styled.button`
  padding: 13px 19px 13px 19px;
  border-radius: 60px 60px 60px 60px;
  background: ${colorPrimary};
  border-color: ${colorPrimary};
  color: ${colorWhite};

  -webkit-transition: all 0.3s ease-in-out 0s;
  -o-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
  white-space: nowrap;

  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  padding: 13px 30px;
  font-size: 0.9375rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid transparent;

  fill: #fff;
`;

export const LinkStyled = styled(Link)`
  display: flex;
  flex-direction: column;
`;
