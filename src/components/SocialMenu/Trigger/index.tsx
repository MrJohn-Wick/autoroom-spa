import ChatIcon from '@autrm/assets/icons/chating.svg';
import CloseIcon from '@autrm/assets/icons/close.svg';
import type { SyntheticEvent } from 'react';
import { TriggerIconStyled } from './styled';

export function Trigger({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: (e: SyntheticEvent) => void;
}) {
  return (
    <TriggerIconStyled
      onClick={onClick}
      type={isOpen ? CloseIcon : ChatIcon}
      isOpen={isOpen}
      sizes={{
        w: '48px',
        h: '48px',
      }}
    />
  );
}
