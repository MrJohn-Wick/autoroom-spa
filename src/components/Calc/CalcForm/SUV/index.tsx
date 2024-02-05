import { Checkbox } from 'antd';
import { useContext } from 'react';
import { CalcContext } from '../..';

export function SUV() {
  const calcData = useContext(CalcContext);

  return (
    <div>
      <Checkbox
        checked={calcData?.suv}
        onChange={(e) => calcData?.setSUV(e.target.checked)}
      >
        Внедорожник
      </Checkbox>
    </div>
  );
}
