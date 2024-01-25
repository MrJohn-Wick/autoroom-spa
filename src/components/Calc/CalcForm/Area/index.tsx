import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import type { SelectChangeEvent } from '@mui/material';
import { useContext, useMemo } from 'react';
import { CalcContext } from '../..';
import { getAuctions, getLocations } from '../../utils';

export function Area() {
  const calcData = useContext(CalcContext);
  const [auction, setAuction] = calcData.auction;
  const [location, setLocation] = calcData.location;
  const auctionsOptions = getAuctions();
  const locationsOptions = useMemo(() => getLocations(auction), [auction]);

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
          {auctionsOptions.map((a) => (
            <MenuItem value={a}>{a}</MenuItem>
          ))}
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
          {locationsOptions.map((l) => (
            <MenuItem value={l}>{l}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}
