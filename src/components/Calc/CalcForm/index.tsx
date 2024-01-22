import { useMemo, useState } from 'react';
import { getAuctions, getLocations } from '../utils';
import { SelectField } from './SelectField';
import { FormWrapperStyled } from './styled';

type FormData = {
  auction: string;
  location: string;
};

export function CalcForm() {
  const [formData, setFormData] = useState<FormData>({
    auction: '',
    location: '',
  });

  function handleInputChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  return (
    <FormWrapperStyled>
      <form>
        <SelectField
          name="auction"
          label="Аукцион"
          value={formData.auction}
          options={getAuctions()}
          onChange={handleInputChange}
        />
        <SelectField
          name="location"
          label="Площадка"
          value={formData.location}
          options={getLocations(formData.auction)}
          onChange={handleInputChange}
        />
      </form>
    </FormWrapperStyled>
  );
}
