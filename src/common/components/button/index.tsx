import { ButtonStyled } from './styled';

export function Button({ children }: { children: any }) {
  return <ButtonStyled type="button">{children}</ButtonStyled>;
}
