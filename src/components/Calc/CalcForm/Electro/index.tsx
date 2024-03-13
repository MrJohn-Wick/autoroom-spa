import { useContext } from 'react';
import { Checkbox } from 'antd';
import { CalcContext } from '../..';

export function Electro() {
  const calcData = useContext(CalcContext);

  return (
    <div>
      <Checkbox
        checked={calcData?.electro}
        onChange={(e) => calcData?.setElectro(e.target.checked)}
      >
        Электропривод
      </Checkbox>
    </div>
  );
}
