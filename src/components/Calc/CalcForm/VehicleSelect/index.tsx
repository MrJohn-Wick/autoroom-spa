import { useContext, useState } from 'react';

import { Select } from 'antd';

import { CalcContext } from '../..';
import { getVehicles } from '../../utils';
import { FormFieldStyled } from '../styled';

export function VehicleSelect() {
  const calcData = useContext(CalcContext);
  const [vehicleOptions] = useState<{ value: string; name: string }[]>(getVehicles());

  return (
    <FormFieldStyled>
      <div id="vehicle-label">Тип транспорта</div>
      <Select
        size="large"
        value={calcData?.vehicle}
        onChange={calcData?.setVehicle}
      >
        {vehicleOptions.map((item) => (
          <Select.Option value={item.value}>{item.name}</Select.Option>
        ))}
      </Select>
    </FormFieldStyled>
  );
}
