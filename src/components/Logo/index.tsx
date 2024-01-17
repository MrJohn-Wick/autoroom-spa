import { Image } from '@autrm/common/components/image';

import { LogoStyled } from './styled';

export function Logo({ type }: { type: string }) {
  return (
    <LogoStyled>
      <Image
        src={type}
        height={50}
        width={50}
      />
      <span>AutoRoom</span>
    </LogoStyled>
  );
}
