import details from '@autrm/assets/icons/details.svg';
import { SVGIcon } from '@autrm/common/components/svg-icon';
import { ContentBottomStyled } from './styled';

export function ContentButtom({ href }: { href: string }) {
  return (
    <ContentBottomStyled>
      <a href={href}>
        <SVGIcon
          type={details}
          sizes={{
            w: '35px',
            h: '21px',
          }}
        />
        Детали
      </a>
    </ContentBottomStyled>
  );
}
