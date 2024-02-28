import { HeadingLevel3 } from '@autrm/common/tokens/typography';
import {
  ContactItemContent,
  ContactsItemDescriptionStyled,
  ContactsItemStyled,
  H4Styled,
} from './styled';

export function ContactsWidget() {
  return (
    <>
      <HeadingLevel3>Мы находимся в Витебске</HeadingLevel3>
      <ContactsItemStyled>
        <H4Styled>Телефон:</H4Styled>
        <ContactItemContent>
          <a href="tel:+375291524415">+375 (29) 152-44-15</a>
        </ContactItemContent>
      </ContactsItemStyled>
      <ContactsItemStyled>
        <H4Styled>Адрес:</H4Styled>
        <ContactItemContent>г. Витебск, ул. Ленина, 1</ContactItemContent>
        <ContactsItemDescriptionStyled>
          <span>
            Звоните и приходите
            <br />c 10:00 до 19:00 пн-пт
          </span>
        </ContactsItemDescriptionStyled>
      </ContactsItemStyled>
      <ContactsItemStyled>
        <H4Styled>Почта:</H4Styled>
        <ContactItemContent>
          <a href="mailto:autoroomby@gmail.com">AutoroomBy@gmail.com</a>
        </ContactItemContent>
      </ContactsItemStyled>
    </>
  );
}
