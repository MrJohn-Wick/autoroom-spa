import { colorPrimary } from '@autrm/common/tokens/colors';
import { ConfigProvider } from 'antd';
import { CalcTitleStyled } from '../styled';
import { Age } from './Age';
import { Area } from './Area';
import { Benefit } from './Benefit';
import { Electro } from './Electro';
import { Price } from './Price';
import { FormWrapperStyled, HorElStyled, HorizontalWrapperStyled } from './styled';
import { SUV } from './SUV';
import { VehicleSelect } from './VehicleSelect';
import { Volume } from './Volume';

export function CalcForm() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary,
        },
      }}
    >
      <FormWrapperStyled>
        <CalcTitleStyled>Калькулятор стоимости</CalcTitleStyled>
        <VehicleSelect />
        <Price />
        <HorizontalWrapperStyled>
          <HorElStyled>
            <Age />
          </HorElStyled>
          <HorElStyled>
            <Volume />
          </HorElStyled>
        </HorizontalWrapperStyled>
        <Area />
        <Electro />
        <SUV />
        <Benefit />
      </FormWrapperStyled>
    </ConfigProvider>
  );
}
