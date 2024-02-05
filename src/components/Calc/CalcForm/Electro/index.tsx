import { Checkbox } from 'antd';
import { useContext } from 'react';
import { CalcContext } from '../..';

export function Electro() {
  const calcData = useContext(CalcContext);

  return (
    <div>
      <Checkbox
        checked={calcData?.electro}
        onChange={(e) => calcData?.setElectro(e.target.checked)}
      >
        Электромобиль
      </Checkbox>
    </div>
  );
}
