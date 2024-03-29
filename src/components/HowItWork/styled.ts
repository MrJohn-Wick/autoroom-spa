import { styled } from 'styled-components';

import { Button } from '@autrm/common/components/button';
import { Row } from '@autrm/common/components/grid';
import { colorTitle, colorWhite } from '@autrm/common/tokens/colors';
import { ADAPTIVE } from '@autrm/common/tokens/screen';
import { getTextStyles } from '@autrm/common/utils/styles';

export const SectionStyled = styled.section`
  border-radius: 30px;
  background: ${colorWhite};
  padding: 24px 0;

  margin: 0 16px 100px 16px;

  ${ADAPTIVE.minWidth.desktop} {
    padding: 90px 0;
    margin: 0 48px 100px 48px;
  }
`;

export const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 50px;
  flex-wrap: wrap;
`;

export const TitleStyled = styled.h2`
  color: ${colorTitle};
  margin-bottom: 5px;

  ${getTextStyles(null, 700, 40, null)}
  line-height: 1.3;
`;

export const SubtitleStyled = styled.p`
  color: #5e5e5e;
  margin-bottom: 0;
  ${getTextStyles('Open Sans', 400, 16, 26)}
`;

export const RowStyled = styled(Row)`
  position: relative;
  border-bottom: 1px solid #eee;
  padding-bottom: 40px;
`;

export const PilotStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  padding-top: 30px;
  text-align: center;
`;

export const ButtonStyled = styled(Button)`
  background-color: ${colorWhite};
`;
