import { useContext, useMemo } from 'react';
import { CalcContext } from '..';
import { getAuction } from '../utils';

export function CalcResults() {
  const calcData = useContext(CalcContext);

  const fee = useMemo(() => {
    const auction = getAuction(calcData.auction[0], calcData.location[0]);

    return auction?.fee;
  }, [calcData]);

  return (
    <>
      <h3>Покупка и доставка</h3>
      <ul>
        <li>
          <span>Стоимость авто</span>
          <span>$ 0</span>
        </li>
        <li>
          <span>Аукционный сбор</span>
          <span>$ {fee}</span>
        </li>
        <li>
          <span>Транспортировка в порт</span>
          <span>$ 0</span>
        </li>
        <li>
          <span>Доставка от порта до Клайпеды</span>
          <span>$ 0</span>
        </li>
        <li>
          <span>Стоимость услуг</span>
          <span>$ 0</span>
        </li>
      </ul>
      <h3>Растаможка и оформление</h3>
      <ul>
        <li>
          <span>Таможенная пошлина</span>
          <span>$ 0</span>
        </li>
        <li>
          <span>Таможенный сбор</span>
          <span>$ 0</span>
        </li>
        <li>
          <span>Утилизационный сбор</span>
          <span>$ 0</span>
        </li>
        <li>
          <span>Расходы на СВХ</span>
          <span>$ 0</span>
        </li>
      </ul>
      <h3>
        <span>Итого:</span>
        <span>$ 0</span>
      </h3>
    </>
  );
}
