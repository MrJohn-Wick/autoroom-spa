import { TitleStyled } from './styles';

export function Title({ href, children }: { href: string; children: any }) {
  return (
    <TitleStyled>
      <a href={href}>{children}</a>
    </TitleStyled>
  );
}
