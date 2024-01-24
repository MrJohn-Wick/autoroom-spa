import { createContext, useState } from 'react';
import { CalcForm } from './CalcForm';
import { getAuctions } from './utils';
import vehicles from '@autrm/datas/vehicles.json';

export type CalcData = {
  vehicle: any;
  auction: any;
  location: any;
};

export const CalcContext = createContext<CalcData>({
  vehicle: [],
  auction: [],
  location: [],
});

export function Calc() {
  const auctions = getAuctions();
  const value = {
    vehicle: useState(vehicles[0].name),
    auction: useState(auctions[0]),
    location: useState(),
  };

  return (
    <CalcContext.Provider value={value}>
      <CalcForm />
    </CalcContext.Provider>
  );
}
