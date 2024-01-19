import { Link } from 'react-router-dom';

import { CopyrightStyled } from './styled';

export function Copyright() {
  return (
    <CopyrightStyled>
      Copyright 2024 <Link to="#">AutoRoom</Link> | Design By <Link to="#">Alex</Link>
    </CopyrightStyled>
  );
}
