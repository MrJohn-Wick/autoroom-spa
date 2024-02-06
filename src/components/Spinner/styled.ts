import styled from 'styled-components';

import { colorPrimary } from '@autrm/common/tokens/colors';

export const SpinnerStyled = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  left: 0;
  height: 100dvh;
  background: #696969;
  z-index: 999;
  opacity: 0.5;

  .pos-center {
    position: fixed;
    top: calc(50% - 40px);
    left: calc(50% - 40px);
  }

  .loader {
    border: 10px solid #f3f3f3;
    border-top: 10px solid ${colorPrimary};
    border-radius: 50%;
    width: 80px;
    height: 80px;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
