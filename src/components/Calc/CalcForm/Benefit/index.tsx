import { Checkbox } from 'antd';
import { useContext } from 'react';
import { CalcContext } from '../..';

export function Benefit() {
  const calcData = useContext(CalcContext);

  return (
    <div>
      <Checkbox
        checked={calcData?.benefit}
        onChange={(e) => calcData?.setBenefit(e.target.checked)}
      >
        Льготная растаможка
      </Checkbox>
    </div>
  );
}
