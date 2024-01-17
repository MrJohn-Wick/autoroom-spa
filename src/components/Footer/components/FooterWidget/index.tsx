import { TitleStyled } from './styled';
import type { FooterWidgetProps } from './types';

export function FooterWidget(props: FooterWidgetProps) {
  return (
    <div>
      <TitleStyled>{props.title}</TitleStyled>
      {props.children}
    </div>
  );
}
