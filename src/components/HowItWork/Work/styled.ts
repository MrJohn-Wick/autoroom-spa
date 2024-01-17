import { colorPrimary, colorText, colorTitle, colorWhite } from '@autrm/common/tokens/colors';
import { getTextStyles } from '@autrm/common/utils/styles';
import { styled } from 'styled-components';

export const WorkStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: .35s;
  max-width: 250px;
  width: 100%;
  margin: 0 auto;
  align: center;
`;

export const StepStyled = styled.div`
  height: 34px;
  width: 34px;
  border-radius: 50%;
  border: 1px solid rgba(19,20,26,.5);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  z-index: 1;

  & span {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    color: ${colorTitle};
    ${ getTextStyles(null, 600, 15, null) }
    background-color: ${colorPrimary};
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }
`;

export const IconStyled = styled.div`
  height: 70px;
  width: 70px;
  border-radius: 50%;
  background-color: ${colorWhite};
  border: 1px solid #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .35s;
  margin-bottom: 13px;
`;

export const TitleStyled = styled.h6`
  color: ${colorTitle};
  ${ getTextStyles(null, 700, 18, null) }
  margin-bottom: 8px;
  text-align: center;
`;

export const ContentStyled = styled.p`
  color: ${colorText};
  ${ getTextStyles("OpenSans", 400, 16, 26) }
  margin-bottom: 0;
  text-align: center;
`;
