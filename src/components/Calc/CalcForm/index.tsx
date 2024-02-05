import { colorPrimary } from '@autrm/common/tokens/colors';
import { ConfigProvider } from 'antd';
import { CalcTitleStyled } from '../styled';
import { YearsRange } from './YearsRange';
import { AuctionLocation } from './AuctionLocation';
import { Benefit } from './Benefit';
import { Electro } from './Electro';
import { Price } from './Price';
import { FormWrapperStyled, HorizontalElementStyled, HorizontalWrapperStyled } from './styled';
import { SUV } from './SUV';
import { VehicleSelect } from './VehicleSelect';
import { EngineCapacity } from './EngineCapacity';

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
          <HorizontalElementStyled>
            <YearsRange />
          </HorizontalElementStyled>
          <HorizontalElementStyled>
            <EngineCapacity />
          </HorizontalElementStyled>
        </HorizontalWrapperStyled>
        <AuctionLocation />
        <Electro />
        <SUV />
        <Benefit />
      </FormWrapperStyled>
    </ConfigProvider>
  );
}
