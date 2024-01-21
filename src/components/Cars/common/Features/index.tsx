import { Image } from '@autrm/common/components/image';
import { LiStyled, UlStyled } from './styled';

export function Features({ children }: { children: any }) {
  return <UlStyled>{children}</UlStyled>;
}

export function Feature({ icon, children }: { icon: string; children: any }) {
  return (
    <LiStyled>
      <Image src={icon} />
      {children}
    </LiStyled>
  );
}
