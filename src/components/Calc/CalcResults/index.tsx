import { useContext, useMemo, useState } from 'react';
import { CalcContext } from '..';
import { CalcTitleStyled } from '../styled';
import {
  USD_BYN,
  USD_EUR,
  getA1Duty,
  getA2Duty,
  getA3Duty,
  getOurPrice,
  getSVH,
  getTax,
  getVehicle,
  getAuction,
} from '../utils';
import { OverviewContentStyled, OverviewStyled, ResultStyled } from './styled';

export function CalcResults() {
  const calcData = useContext(CalcContext);

  const fee = useMemo(() => {
    const auction = getAuction(calcData?.auction, calcData?.location);

    return auction ? auction.fee : 0;
  }, [calcData?.auction, calcData?.location]);

  const seasideDelivery = useMemo(() => {
    const auction = getAuction(calcData?.auction, calcData?.location);

    return auction ? auction.car : 0;
  }, [calcData?.auction, calcData?.location]);

  const seaDelivery = useMemo(() => {
    const v = getVehicle(calcData?.vehicle);
    let over = 0;
    const res = v ? v.delivery : 0;
    if (calcData?.suv || calcData?.bigSuv) over = 100;
    if (calcData?.electro) over = 175;

    return res + over;
  }, [calcData?.vehicle, calcData?.suv, calcData?.bigSuv, calcData?.electro]);

  const [ourPrice] = useState(getOurPrice());

  const duty = useMemo(() => {
    const price = calcData?.price ? calcData?.price : 0;
    const volume = calcData?.volume ? calcData?.volume : 0;
    let d = 0;
    if (calcData?.age == 'a1') {
      d = getA1Duty(price, volume);
    } else if (calcData?.age == 'a2') {
      d = getA2Duty(volume);
    } else if (calcData?.age == 'a3') {
      d = getA3Duty(volume);
    }
    if (calcData?.benefit) {
      d = d / 2;
    }
    if (calcData?.electro && !calcData?.bigSuv) {
      d = 0;
    }

    return Math.round(d);
  }, [
    calcData?.age,
    calcData?.volume,
    calcData?.price,
    calcData?.benefit,
    calcData?.electro,
    calcData?.bigSuv,
  ]);

  const tax = useMemo(() => {
    let res = getTax();
    if (calcData?.electro) res = 0;

    return res;
  }, [calcData?.electro]);

  const scrap = useMemo(() => {
    const v = getVehicle(calcData?.vehicle);

    return v ? v.scrap : 0;
  }, [calcData?.vehicle]);

  const [svh] = useState(getSVH());

  const result = useMemo(() => {
    let result = 0;
    result += calcData?.price ? calcData?.price : 0;
    result += fee;
    result += seasideDelivery;
    result += seaDelivery;
    result += ourPrice / USD_BYN;
    result += duty / USD_EUR;
    result += tax / USD_BYN;
    result += scrap / USD_BYN;

    return Math.round(result);
  }, [calcData?.price, fee, seasideDelivery, seaDelivery, ourPrice, tax, scrap, duty]);

  return (
    <div>
      <OverviewStyled>
        <div>
          <CalcTitleStyled>Покупка и доставка</CalcTitleStyled>
        </div>
        <OverviewContentStyled>
          <ul>
            <li>
              <span>Стоимость авто</span>$ {calcData?.price}
            </li>
            <li>
              <span>Аукционный сбор</span>$ {fee}
            </li>
            <li>
              <span>Транспортировка в порт</span>$ {seasideDelivery}
            </li>
            <li>
              <span>Доставка от порта до Клайпеды</span>$ {seaDelivery}
            </li>
            <li>
              <span>Стоимость услуг</span>
              {ourPrice} BYN
            </li>
          </ul>
        </OverviewContentStyled>
      </OverviewStyled>
      <OverviewStyled>
        <div>
          <CalcTitleStyled>Растаможка и оформление</CalcTitleStyled>
        </div>
        <OverviewContentStyled>
          <ul>
            <li>
              <span>Таможенная пошлина</span>€ {duty}
            </li>
            <li>
              <span>Таможенный сбор</span>
              {tax} BYN
            </li>
            <li>
              <span>Утилизационный сбор</span>
              {scrap} BYN
            </li>
            <li>
              <span>Расходы на СВХ</span>$ {svh}
            </li>
          </ul>
        </OverviewContentStyled>
      </OverviewStyled>
      <ResultStyled>
        <span>Итого:</span>$ {result}
      </ResultStyled>
    </div>
  );
}
