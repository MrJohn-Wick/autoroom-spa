import { InputNumber } from 'antd';
import { useContext } from 'react';
import { CalcContext } from '../..';
import { FormFieldStyled } from '../styled';
import { PriceStyled, SliderStyled } from './styled';

export function Price() {
  const calcData = useContext(CalcContext);

  const onChange = (newValue: number | null) => {
    if (newValue) calcData?.setPrice(newValue);
  };

  return (
    <FormFieldStyled>
      <PriceStyled>
        <div>Стоимость:</div>
        <InputNumber
          min={100}
          max={100000}
          controls={false}
          value={calcData?.price}
          onChange={onChange}
          size="large"
        />
        <SliderStyled
          min={100}
          max={100000}
          step={100}
          onChange={onChange}
          value={typeof calcData?.price === 'number' ? calcData?.price : 0}
        />
      </PriceStyled>
    </FormFieldStyled>
  );
}
