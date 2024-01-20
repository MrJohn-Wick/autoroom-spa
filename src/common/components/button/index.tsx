import { ButtonBlackedStyled, ButtonStyled } from './styled';

export function Button({ type, children }: { type?: string; children: any }) {
  let component = <ButtonStyled type="button">{children}</ButtonStyled>;
  if (type === 'blacked') {
    component = <ButtonBlackedStyled type="button">{children}</ButtonBlackedStyled>;
  }

  return component;
}
