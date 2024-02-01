import { createContext, useState } from 'react';
import type { Dispatch, SetStateAction, PropsWithChildren } from 'react';
import { CalcForm } from './CalcForm';
import { CalcResults } from './CalcResults';
import { CalcWrapperStyled } from './styled';

export type CalcContextType = {
  vehicle: string | undefined;
  setVehicle: Dispatch<SetStateAction<string>>;
  auction: string | undefined;
  setAuction: Dispatch<SetStateAction<string>>;
  location: string | undefined;
  setLocation: Dispatch<SetStateAction<string>>;
  price: number | undefined;
  setPrice: Dispatch<SetStateAction<number>>;
};

export const CalcContext = createContext<CalcContextType | undefined>(undefined);

export const CalcProvider = ({ children }: PropsWithChildren<object>) => {
  const [vehicle, setVehicle] = useState('');
  const [auction, setAuction] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState(5000);

  return (
    <CalcContext.Provider
      value={{
        vehicle,
        setVehicle,
        auction,
        setAuction,
        location,
        setLocation,
        price,
        setPrice,
      }}
    >
      {children}
    </CalcContext.Provider>
  );
};

export function Calc() {
  return (
    <CalcProvider>
      <CalcWrapperStyled>
        <CalcForm />
        <CalcResults />
      </CalcWrapperStyled>
    </CalcProvider>
  );
}
