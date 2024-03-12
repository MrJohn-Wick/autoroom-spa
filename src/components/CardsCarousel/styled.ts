import { styled } from 'styled-components';

import { colorPrimary } from '@autrm/common/tokens/colors';
import { getTextStyles } from '@autrm/common/utils/styles';

export const SectionStyled = styled.section`
  margin: 100px 0;
  -webkit-animation: slide-top 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-top 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  @-webkit-keyframes slide-top {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      -webkit-transform: translateY(-100px);
      transform: translateY(-100px);
    }
  }
  @keyframes slide-top {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      -webkit-transform: translateY(-100px);
      transform: translateY(-100px);
    }
  }
`;

export const TitleWrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const TitleStyled = styled.div`
  & h2 {
    margin-bottom: 5px;
  }
  & p {
    ${getTextStyles('Open Sans', 400, 16, 26)};
    color: #5e5e5e;
  }
`;

export const SliderButtonsStyled = styled.div`
  display: flex;
  width: 100%;
  max-width: 90px;
  justify-content: space-between;
  align-items: center;
`;

export const SliderBtnStyled = styled.div`
  height: 34px;
  width: 34px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(19, 20, 26, 0.16);
  cursor: pointer;
  transition: 0.35s;

  &:hover {
    background-color: ${colorPrimary};
  }
`;
