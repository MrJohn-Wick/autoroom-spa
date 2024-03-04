import { ButtonBlackedStyled, ButtonStyled } from './styled';

export function Button({
  type,
  children,
  onClick,
}: {
  type?: string;
  children: any;
  onClick?: any;
}) {
  let component = (
    <ButtonStyled
      type="button"
      onClick={onClick}
    >
      {children}
    </ButtonStyled>
  );
  if (type === 'blacked') {
    component = (
      <ButtonBlackedStyled
        type="button"
        onClick={onClick}
      >
        {children}
      </ButtonBlackedStyled>
    );
  }

  return component;
}
