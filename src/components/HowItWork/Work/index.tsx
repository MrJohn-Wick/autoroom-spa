import { SVGIcon } from '@autrm/common/components/svg-icon';
import { ContentStyled, IconStyled, StepStyled, TitleStyled, WorkStyled } from './styled';
import type { WorkProps } from './tyles';

export function Work(props: WorkProps) {
  return (
    <WorkStyled>
      <StepStyled>
        <span>{props.step}</span>
      </StepStyled>
      <IconStyled>
        <SVGIcon
          type={props.icon}
          sizes={{
            w: '36px',
            h: '36px',
          }}
        />
      </IconStyled>
      <TitleStyled>{props.title}</TitleStyled>
      <ContentStyled>{props.content}</ContentStyled>
    </WorkStyled>
  );
}
