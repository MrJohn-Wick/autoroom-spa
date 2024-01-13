/* eslint-disable jsx-a11y/anchor-is-valid */
import { LeftMenuStyled } from './styled';

export function LeftNav() {
  return (
    <LeftMenuStyled>
      <ul>
        <li>
          <a href="#">
            Последнее
          </a>
        </li>
        <li>
          <a href="#">
            Партнерам
          </a>
        </li>
        <li>
          <a href="#">
            Предложения
          </a>
        </li>
      </ul>
    </LeftMenuStyled>
  );
}