import { useState } from 'react';

import { Link } from 'react-router-dom';

import SearchIcon from '@autrm/assets/icons/search.svg';
import { SVGIcon } from '@autrm/common/components/svg-icon';

import { SearchStyled } from './styled';

export function Search() {
  const [value, setValue] = useState('');

  return (
    <SearchStyled>
      <input
        type="text"
        placeholder="Отследить авто по vin номеру"
        onChange={(e: any) => setValue(e?.target?.value)}
        value={value}
      />
      <Link to={`/tracking/${value}`}>
        <button type="submit">
          <SVGIcon
            type={SearchIcon}
            sizes={{
              w: '16px',
              h: '16px',
            }}
          />
        </button>
      </Link>
    </SearchStyled>
  );
}
