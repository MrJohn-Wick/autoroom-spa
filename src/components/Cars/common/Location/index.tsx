import { SVGIcon } from '@autrm/common/components/svg-icon';
import { LocationStyled } from './styled';
import geo from '@autrm/assets/icons/geo.svg';

export function Location({ children }: { children: any }) {
  return (
    <LocationStyled>
      <a href="#">
        <SVGIcon
          type={geo}
          sizes={{
            w: '13px',
            h: '13px',
          }}
        />
        {children}
      </a>
    </LocationStyled>
  );
}
