import { Select } from 'antd';
import { useContext } from 'react';
import { CalcContext } from '../..';
import { FormFieldStyled } from '../styled';

export function YearsRange() {
  const ageOptions = [
    {
      value: 'a1',
      label: 'менее 3 лет',
    },
    {
      value: 'a2',
      label: 'от 3 до 5 лет',
    },
    {
      value: 'a3',
      label: 'старше 5 лет',
    },
  ];
  const calcData = useContext(CalcContext);

  function onChange(value: string) {
    calcData?.setAge(value);
  }

  return (
    <FormFieldStyled>
      <div>Возраст, лет</div>
      <Select
        onChange={onChange}
        value={calcData?.age}
        size="large"
      >
        {ageOptions.map((a) => (
          <Select.Option value={a.value}>{a.label}</Select.Option>
        ))}
      </Select>
    </FormFieldStyled>
  );
}
