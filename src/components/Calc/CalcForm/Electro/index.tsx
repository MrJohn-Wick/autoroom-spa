import { useContext } from 'react';

import { Checkbox } from 'antd';

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
      ) : null}
    </div>
  );
}
