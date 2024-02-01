import { useContext, useMemo } from 'react';
import { CalcContext } from '..';
import { CalcTitleStyled } from '../styled';
import { getAuction } from '../utils';
import { OverviewContentStyled, OverviewStyled, ResultStyled } from './styled';

export function CalcResults() {
  const calcData = useContext(CalcContext);

  const fee = useMemo(() => {
    const auction = getAuction(calcData?.auction, calcData?.location);

    return auction?.fee;
  }, [calcData]);

  return (
    <div>
      <OverviewStyled>
        <div>
          <CalcTitleStyled>Покупка и доставка</CalcTitleStyled>
        </div>
        <OverviewContentStyled>
          <ul>
            <li>
              <span>Стоимость авто</span>$ 0
            </li>
            <li>
              <span>Аукционный сбор</span>$ {fee}
            </li>
            <li>
              <span>Транспортировка в порт</span>$ 0
            </li>
            <li>
              <span>Доставка от порта до Клайпеды</span>$ 0
            </li>
            <li>
              <span>Стоимость услуг</span>$ 0
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
              <span>Таможенная пошлина</span>$ 0
            </li>
            <li>
              <span>Таможенный сбор</span>$ {fee}
            </li>
            <li>
              <span>Утилизационный сбор</span>$ 0
            </li>
            <li>
              <span>Расходы на СВХ</span>$ 0
            </li>
          </ul>
        </OverviewContentStyled>
      </OverviewStyled>
      <ResultStyled>
        <span>Итого:</span>$ 0
      </ResultStyled>
    </div>
  );
}
