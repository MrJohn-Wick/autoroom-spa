import { Checkbox } from 'antd';
import { useContext } from 'react';
import { CalcContext } from '../..';

export function Electro() {
  const calcData = useContext(CalcContext);

  return (
    <div>
      {!calcData?.bigSuv ? (
        <Checkbox
          checked={calcData?.electro}
          onChange={(e) => calcData?.setElectro(e.target.checked)}
        >
          Электромобиль (Гибрид)
        </Checkbox>
      ) : (
        <></>
      )}
    </div>
  );
}
