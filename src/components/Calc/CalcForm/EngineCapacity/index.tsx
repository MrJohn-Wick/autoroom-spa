import { InputNumber } from 'antd';
import { useContext } from 'react';
import { CalcContext } from '../..';
import { FormFieldStyled } from '../styled';

export function EngineCapacity() {
  const calcData = useContext(CalcContext);

  return (
    <FormFieldStyled>
      <div>Объем двигателя, куб.см.</div>
      <InputNumber
        min={1}
        max={10000}
        value={calcData?.volume}
        onChange={(v) => (v ? calcData?.setVolume(v) : null)}
        size="large"
        step={100}
      />
    </FormFieldStyled>
  );
}
