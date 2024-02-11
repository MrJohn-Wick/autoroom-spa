import { createContext, useState } from 'react';
import type { Dispatch, SetStateAction, PropsWithChildren } from 'react';
import { CalcForm } from './CalcForm';
import { CalcResults } from './CalcResults';
import { CalcWrapperStyled } from './styled';
import { getAuctions, getVehicles } from './utils';
import _ from 'lodash';

export type CalcContextType = {
  vehicle: string | undefined;
  setVehicle: Dispatch<SetStateAction<string>>;
  age: string | undefined;
  setAge: Dispatch<SetStateAction<string>>;
  volume: number | undefined;
  setVolume: Dispatch<SetStateAction<number>>;
  auction: string | undefined;
  setAuction: Dispatch<SetStateAction<string | undefined>>;
  location: string | undefined;
  setLocation: Dispatch<SetStateAction<string>>;
  price: number | undefined;
  setPrice: Dispatch<SetStateAction<number>>;
  electro: boolean;
  setElectro: Dispatch<SetStateAction<boolean>>;
  suv: boolean;
  setSUV: Dispatch<SetStateAction<boolean>>;
  bigSuv: boolean;
  setBigSUV: Dispatch<SetStateAction<boolean>>;
  benefit: boolean;
  setBenefit: Dispatch<SetStateAction<boolean>>;
};

export const CalcContext = createContext<CalcContextType | undefined>(undefined);

export const CalcProvider = ({ children }: PropsWithChildren<object>) => {
  const vehicles = getVehicles();
  const defaultVehicle = _.first(vehicles);
  const auctions = getAuctions();
  const defaultAuction = _.first(auctions);
  const [vehicle, setVehicle] = useState(defaultVehicle ? defaultVehicle.value : '');
  const [age, setAge] = useState('a1');
  const [volume, setVolume] = useState(2000);
  const [auction, setAuction] = useState(defaultAuction);
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState(5000);
  const [electro, setElectro] = useState(false);
  const [suv, setSUV] = useState(false);
  const [bigSuv, setBigSUV] = useState(false);
  const [benefit, setBenefit] = useState(false);

  return (
    <CalcContext.Provider
      value={{
        vehicle,
        setVehicle,
        age,
        setAge,
        volume,
        setVolume,
        auction,
        setAuction,
        location,
        setLocation,
        price,
        setPrice,
        electro,
        setElectro,
        suv,
        setSUV,
        bigSuv,
        setBigSUV,
        benefit,
        setBenefit,
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
