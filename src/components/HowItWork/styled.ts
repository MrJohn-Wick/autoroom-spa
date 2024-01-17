import { styled } from 'styled-components';

import { Row } from '@autrm/common/components/grid';
import { colorTitle } from '@autrm/common/tokens/colors';
import { getTextStyles } from '@autrm/common/utils/styles';

export const SectionStyled = styled.section`
  border-radius: 30px;
  background: #f6f6f6;
  padding: 90px 0;
  margin-bottom: 100px;
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
  ${getTextStyles('OpenSans', 400, 16, 26)}
`;

export const RowStyled = styled(Row)`
  position: relative;
  border-bottom: 1px solid #eee;
  padding-bottom: 40px;

  &::before {
    content: '';
    display: block;
    height: 1px;
    width: 100%;
    background-color: #eee;
    position: absolute;
    top: 17px;
    left: 0;
  }
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
