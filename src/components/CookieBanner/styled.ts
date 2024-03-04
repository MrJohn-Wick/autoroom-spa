import { colorPrimary, colorWhite } from '@autrm/common/tokens/colors';
import { ADAPTIVE } from '@autrm/common/tokens/screen';
import { styled } from 'styled-components';

export const OverlayStyled = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background: rgba(59, 72, 89, 0.7);
  backdrop-filter: blur(10px);
  padding-top: 16px;
  padding-bottom: 16px;
  color: ${colorWhite};
  z-index: 1;

  ${ADAPTIVE.minWidth.tablet} {
    padding-left: 24px;
    padding-right: 24px;
  }

  ${ADAPTIVE.minWidth.desktop} {
    padding-left: 48px;
    padding-right: 48px;
  }
`;

export const WrapperStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  & a {
    text-decoration: underline;
    transition: 0.35s;
  }
  & a:hover {
    color: ${colorPrimary};
  }

  ${ADAPTIVE.maxWidth.tablet} {
    justify-content: center;

    & button {
      margin-top: 20px;
    }
  }
`;
