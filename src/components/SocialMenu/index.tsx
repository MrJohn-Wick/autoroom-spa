import { Trigger } from './Trigger';
import { DropdownStyled, SocialMenuStyled } from './styled';
import { Instagram } from './SocialButtons/Instagram';
import { Telegram } from './SocialButtons/Telegram';
import { useState } from 'react';

export function SocialMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SocialMenuStyled>
      <Trigger
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      />
      <DropdownStyled>
        <ul>
          <li>
            <Instagram isOpen={isOpen} />
          </li>
          <li>
            <Telegram isOpen={isOpen} />
          </li>
        </ul>
      </DropdownStyled>
    </SocialMenuStyled>
  );
}
