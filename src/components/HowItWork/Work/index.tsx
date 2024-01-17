import { ContentStyled, IconStyled, StepStyled, TitleStyled, WorkStyled } from './styled';
import type { WorkProps } from './tyles';

export function Work(props: WorkProps) {
  return (
    <WorkStyled>
      <StepStyled>
        <span>{props.step}</span>
      </StepStyled>
      <IconStyled>
        <img src={props.icon} />
      </IconStyled>
      <TitleStyled>{props.title}</TitleStyled>
      <ContentStyled>{props.content}</ContentStyled>
    </WorkStyled>
  );
}
