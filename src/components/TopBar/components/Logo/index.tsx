import { Image } from '@autrm/common/components/image';
import LogoImage from '@autrm/assets/logo.jpg'
import { LogoStyled } from './styled';

export function Logo() {
  return (
    <LogoStyled>
      <Image src={LogoImage} height={50} width={50} />
      <span>AutoRoom</span>
    </LogoStyled>
  );
}