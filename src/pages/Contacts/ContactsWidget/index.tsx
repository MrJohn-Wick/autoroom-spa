import { HeadingLevel3 } from '@autrm/common/tokens/typography';
import { getEmail, getEmailDisplay, getPhone, getPhoneDisplay } from '@autrm/datas/contacts';
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
          <a href={'tel:' + getPhone()}>{getPhoneDisplay()}</a>
        </ContactItemContent>
      </ContactsItemStyled>
      <ContactsItemStyled>
        <H4Styled>Адрес:</H4Styled>
        <ContactItemContent>ул. Петруся Бровки, 4Б</ContactItemContent>
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
          <a href={'mailto:' + getEmail()}>{getEmailDisplay()}</a>
        </ContactItemContent>
      </ContactsItemStyled>
    </>
  );
}
