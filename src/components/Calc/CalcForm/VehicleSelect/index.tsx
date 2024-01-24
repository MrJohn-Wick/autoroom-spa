import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import type { SelectChangeEvent } from '@mui/material';
import { useContext } from 'react';
import { CalcContext } from '../..';

export function VehicleSelect() {
  const calcData = useContext(CalcContext);
  const [vehicle, setVehicle] = calcData.vehicle;

  const handleChange = (event: SelectChangeEvent) => {
    setVehicle(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="vehicle-label">Тип транспорта</InputLabel>
      <Select
        labelId="vehicle-label"
        id="vehicle-select"
        label="Age"
        value={vehicle}
        onChange={handleChange}
      >
        <MenuItem value="auto">Auto</MenuItem>
        <MenuItem value="moto">Moto</MenuItem>
        <MenuItem value="snow">Snow</MenuItem>
      </Select>
    </FormControl>
  );
}
