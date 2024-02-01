import { InputNumber } from 'antd';
import { useState } from 'react';
import { FormFieldStyled } from '../styled';

export function Volume() {
  const [volume, setVolume] = useState(2000);

  return (
    <FormFieldStyled>
      <div>Объем двигателя, куб.см.</div>
      <InputNumber
        min={1}
        max={10000}
        value={volume}
        onChange={(v) => (v ? setVolume(v) : null)}
        size="large"
        step={100}
      />
    </FormFieldStyled>
  );
}
