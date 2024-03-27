import { Col, Container, Row } from '@autrm/common/components/grid';
import { HeadingLevel2, HeadingLevel3, HeadingLevel4 } from '@autrm/common/tokens/typography';

import { InfoStyled, RegularTextLevel1Styled } from './styled';

export function Info() {
  return (
    <Container pb="56px">
      <Row>
        <Col>
          <InfoStyled>
            <HeadingLevel2>Свидетельство</HeadingLevel2>
            <HeadingLevel3>о государственной регистрации юридического лица</HeadingLevel3>
            <HeadingLevel4>Администрацией Железнодорожного района г. Витебск</HeadingLevel4>
            <HeadingLevel3>3 декабря 2015 года</HeadingLevel3>
            <RegularTextLevel1Styled>
              в Единый государственный реестр юридических лиц и индивидуальных предпринимателей
              внесена запись о государственной регистрации
            </RegularTextLevel1Styled>
            <RegularTextLevel1Styled>
              регистрационный номер <strong>391417639</strong>
            </RegularTextLevel1Styled>
            <p>
              Частное торговое унитарное предприятие <strong>«ВитЛайк Кофе»</strong>
            </p>
            <p>
              Адрес: г. Витебск, 210026, ул. Ленина д.26-А, уровень-1, неизолированный торговый
              объект №5
            </p>
            <p>p/c BY13ALFA30122667820010270000 в 3А0 "АЛЬФА-БАНК",</p>
            <p>г. Минск, ул. Сурганова, 43-47, СВИФТ ALFABY2X УНП 391417639 ОКПО 303845352000</p>
          </InfoStyled>
        </Col>
      </Row>
    </Container>
  );
}
