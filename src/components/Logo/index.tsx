import { Link } from 'react-router-dom';

import { Image } from '@autrm/common/components/image';

import { LogoStyled } from './styled';

export function Logo({ type }: { type: string }) {
  return (
    <Link to="/">
      <LogoStyled>
        <Image
          src={type}
          height={50}
          width={50}
        />
        <span>АВТОРУМ.BY</span>
      </LogoStyled>
    </Link>
  );
}
