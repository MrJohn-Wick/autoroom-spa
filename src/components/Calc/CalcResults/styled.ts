import { colorGrey200, colorTitle } from '@autrm/common/tokens/colors';
import { getTextStyles } from '@autrm/common/utils/styles';
import { styled } from 'styled-components';

export const OverviewStyled = styled.div`
  margin-bottom: 50px;
`;

export const OverviewContentStyled = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  border: 1px solid ${colorGrey200};
  padding: 30px 20px;

  & ul {
    list-style: none;
    width: 100%;
  }

  & ul li {
    ${getTextStyles('Open Sans', 600, 15, 15)}
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 18px 0 10px;
  }
  & ul li:first-child {
    padding-top: 0;
  }

  & ul li::after {
    content: '';
    height: 1px;
    width: 100%;
    background: radial-gradient(50% 50% at 50% 50%, #eee 0, hsla(0, 0%, 93%, 0) 100%);
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

export const ResultStyled = styled.h3`
  color: ${colorTitle};
  ${getTextStyles('Montserrat', 600, 20, null)}
  position: relative;
  display: inline-block;
  margin-bottom: 25px;
  display: flex;
  justify-content: space-between;

  & ::after {
    content: '';
    height: 1px;
    width: 100%;
    background: radial-gradient(50% 50% at 50% 50%, #eee 0, hsla(0, 0%, 93%, 0) 100%);
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;
