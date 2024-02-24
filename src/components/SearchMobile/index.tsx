import { useState } from 'react';

import SearchIcon from '@autrm/assets/icons/search.svg';
import { SVGIcon } from '@autrm/common/components/svg-icon';

import { ButtonStyled, LinkStyled, SearchMobileStyled } from './styled';

export function SearchMobile() {
  const [value, setValue] = useState('');

  return (
    <SearchMobileStyled>
      <input
        type="text"
        onChange={(e: any) => setValue(e?.target?.value)}
        placeholder="Введите VIN номер"
      />
      <LinkStyled to={`/tracking/${value}`}>
        <ButtonStyled>
          <SVGIcon
            type={SearchIcon}
            sizes={{
              w: '16px',
              h: '16px',
            }}
          />
        </ButtonStyled>
      </LinkStyled>
    </SearchMobileStyled>
  );
}
