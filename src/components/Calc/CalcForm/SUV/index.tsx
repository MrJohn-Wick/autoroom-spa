import { Checkbox } from 'antd';
import { useContext } from 'react';
import { CalcContext } from '../..';

export function SUV() {
  const calcData = useContext(CalcContext);

  return (
    <>
      <div>
        <Checkbox
          checked={calcData?.suv}
          onChange={(e) => {
            calcData?.setSUV(e.target.checked);
            calcData?.setBigSUV(false);
          }}
        >
          Паркетник
        </Checkbox>
      </div>
      <div>
        <Checkbox
          checked={calcData?.bigSuv}
          onChange={(e) => {
            calcData?.setBigSUV(e.target.checked);
            calcData?.setSUV(false);
          }}
        >
          Большой паркетник
        </Checkbox>
      </div>
    </>
  );
}
