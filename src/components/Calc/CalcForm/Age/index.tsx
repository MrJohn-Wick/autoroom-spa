import { Select } from 'antd';
import { useState } from 'react';
import { FormFieldStyled } from '../styled';

export function Age() {
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
      label: 'от 5 до 7 лет',
    },
    {
      value: 'a4',
      label: 'более 7 лет',
    },
  ];
  const [age, setAge] = useState('a1');

  function onChange(value: string) {
    setAge(value);
  }

  return (
    <FormFieldStyled>
      <div>Возраст, лет</div>
      <Select
        onChange={onChange}
        value={age}
        size="large"
      >
        {ageOptions.map((a) => (
          <Select.Option value={a.value}>{a.label}</Select.Option>
        ))}
      </Select>
    </FormFieldStyled>
  );
}
