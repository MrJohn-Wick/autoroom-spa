import { ContentStyled, HotlineStyled, IconStyled } from './styled';
import type { HotlineProps } from './tyles';

export function Hotline(props: HotlineProps) {
  return (
    <HotlineStyled>
      <IconStyled>{props.icon}</IconStyled>
      <ContentStyled>
        <span>{props.title}</span>
        <h6>
          <a href={props.href}>{props.link}</a>
        </h6>
      </ContentStyled>
    </HotlineStyled>
  );
}
