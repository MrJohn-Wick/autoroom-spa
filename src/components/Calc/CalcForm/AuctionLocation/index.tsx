import { useContext, useEffect, useState } from 'react';
import { Select } from 'antd';
import { CalcContext } from '../..';
import { getAuctions, getLocations } from '../../utils';
import { FormFieldStyled } from '../styled';

export function AuctionLocation() {
  const calcData = useContext(CalcContext);
  const auctionsOptions = getAuctions();
  const [locationsOptions, setLocationsOptions] = useState<string[]>([]);
  const [location, setLocation] = useState<string>('');

  useEffect(() => {
    const locations = getLocations(calcData?.auction);
    setLocationsOptions(locations);
  }, [calcData?.auction]);

  useEffect(() => {
    setLocation(locationsOptions[0]);
  }, [locationsOptions]);

  useEffect(() => {
    calcData?.setLocation(location);
  }, [location, calcData]);

  return (
    <FormFieldStyled>
      <FormFieldStyled>
        <div id="auction-label">Аукцион</div>
        <Select
          value={calcData?.auction}
          size="large"
          onChange={(a) => calcData?.setAuction(a)}
        >
          {auctionsOptions.map((a) => (
            <Select.Option value={a}>{a}</Select.Option>
          ))}
        </Select>
      </FormFieldStyled>

      <div>
        <div id="location-label">Площадка</div>
        <Select
          value={location}
          size="large"
          onChange={(l) => setLocation(l)}
        >
          {locationsOptions.map((l) => (
            <Select.Option value={l}>{l}</Select.Option>
          ))}
        </Select>
      </div>
    </FormFieldStyled>
  );
}
