import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import type { SelectChangeEvent } from '@mui/material';
import { useContext } from 'react';
import { CalcContext } from '../..';

export function Area() {
  const calcData = useContext(CalcContext);
  const [auction, setAuction] = calcData.auction;
  const [location, setLocation] = calcData.location;

  const handleChangeAuction = (event: SelectChangeEvent) => {
    setAuction(event.target.value);
  };
  const handleChangeLocation = (event: SelectChangeEvent) => {
    setLocation(event.target.value);
  };

  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="auction-label">Аукцион</InputLabel>
        <Select
          labelId="auction-label"
          id="auction-select"
          label="Аукцион"
          value={auction}
          onChange={handleChangeAuction}
        >
          <MenuItem value="auto">IAAI</MenuItem>
          <MenuItem value="moto">Copat</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id="location-label">Площадка</InputLabel>
        <Select
          labelId="location-label"
          id="location-select"
          label="Площадка"
          value={location}
          onChange={handleChangeLocation}
        >
          <MenuItem value="auto">XXXXXXX</MenuItem>
          <MenuItem value="moto">YYYYYYYY</MenuItem>
          <MenuItem value="auto">ZZZZZZZ</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
