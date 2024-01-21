import { colorPrimary } from '@autrm/common/tokens/colors';
import { getTextStyles } from '@autrm/common/utils/styles';
import { styled } from 'styled-components';

export const SectionStyled = styled.section`
  margin: 100px 0;
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
