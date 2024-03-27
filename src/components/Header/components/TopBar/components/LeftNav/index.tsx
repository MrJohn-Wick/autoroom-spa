/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';

import { LeftMenuStyled } from './styled';

export function LeftNav() {
  return (
    <LeftMenuStyled>
      <ul>
        {/* <li>
          <a href="#">Последнее</a>
        </li> */}
        <li>
          <Link to="/contract">Договор</Link>
        </li>
        <li>
          <a href="/pay">Оплата</a>
        </li>
        <li>
          <a href="/info">Юридическое лицо</a>
        </li>
      </ul>
    </LeftMenuStyled>
  );
}
