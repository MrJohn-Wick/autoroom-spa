import { useContext, useEffect, useState } from 'react';
import { Select } from 'antd';
import { CalcContext } from '../..';
import { getAuctions, getLocations } from '../../utils';
import { FormFieldStyled } from '../styled';

export function Area() {
  const calcData = useContext(CalcContext);
  const auctionsOptions = getAuctions();
  const [locationsOptions, setLocationsOptions] = useState<string[]>([]);

  useEffect(() => {
    const locations = getLocations(calcData?.auction);
    setLocationsOptions(locations);
  }, [calcData?.auction]);

  useEffect(() => {
    calcData?.setLocation(locationsOptions[0]);
  }, [locationsOptions, calcData?.location, calcData]);

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
          value={calcData?.location}
          size="large"
          onChange={(l) => calcData?.setLocation(l)}
        >
          {locationsOptions.map((l) => (
            <Select.Option value={l}>{l}</Select.Option>
          ))}
        </Select>
      </div>
    </FormFieldStyled>
  );
}
