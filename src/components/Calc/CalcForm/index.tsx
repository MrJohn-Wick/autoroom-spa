import { useContext } from 'react';

import { ConfigProvider, Checkbox, Radio } from 'antd';

import { colorPrimary } from '@autrm/common/tokens/colors';

import { CalcContext } from '..';
import { CalcTitleStyled } from '../styled';

import { AuctionLocation } from './AuctionLocation';
import { Benefit } from './Benefit';
import { Electro } from './Electro';
import { EngineCapacity } from './EngineCapacity';
import { Price } from './Price';
// import { SUV } from './SUV';
import { VehicleSelect } from './VehicleSelect';
import { YearsRange } from './YearsRange';
import {
  FormWrapperStyled,
  HorizontalElementStyled,
  HorizontalWrapperStyled,
  SUVTypeListStyled,
} from './styled';

export function CalcForm() {
  const calcContext = useContext(CalcContext);

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
        {calcContext?.electro && (
          <SUVTypeListStyled>
            <Radio.Group
              onChange={(e) => calcContext?.setElectroOption(e.target.value)}
              value={calcContext?.electroOption}
            >
              <Radio value={1}>Электромобиль</Radio>
              <Radio value={2}>Гибрид</Radio>
            </Radio.Group>
          </SUVTypeListStyled>
        )}
        {/* <SUV /> */}
        <Benefit />
        <Checkbox
          checked={calcContext?.suvTypeOptionsActive}
          onChange={(e) => calcContext?.setSuvTypeOptionsActive(e.target.checked)}
        >
          SUV (Стандартный/Большой паркетник)
        </Checkbox>
        {calcContext?.suvTypeOptionsActive && (
          <SUVTypeListStyled>
            <Radio.Group
              onChange={(e) => calcContext?.setSuvSelectedOption(e.target.value)}
              value={calcContext?.suvSelectedOption}
            >
              <Radio value={0}>Стандартный паркетник</Radio>
              <Radio value={1}>Большой паркетник</Radio>
            </Radio.Group>
          </SUVTypeListStyled>
        )}
      </FormWrapperStyled>
    </ConfigProvider>
  );
}
