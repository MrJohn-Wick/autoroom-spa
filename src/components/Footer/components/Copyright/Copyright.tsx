import { Link } from 'react-router-dom';
import { CopyrightStyled } from './styled';

export function Copyright() {
  return (
    <CopyrightStyled>Copyright 2023 <Link to="#">DRIVCO</Link> | Design By <Link to="#">Egens Lab</Link></CopyrightStyled>
  );
}