import { Slider } from 'antd';
import { styled } from 'styled-components';

export const PriceStyled = styled.div`
  & .ant-input-number {
    width: 100%;
  }
`;

export const SliderStyled = styled(Slider)`
  margin-top: -4px;
  margin-bottom: 7px;
`;
