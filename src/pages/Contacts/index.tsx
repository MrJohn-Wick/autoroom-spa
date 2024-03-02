import { Col, Row } from '@autrm/common/components/grid';
import { Company } from './Company';
import { ContactsWidget } from './ContactsWidget';
import { MapWidget } from './MapWidget';
import { ContainerStyled, HeadingLevel1Styled } from './styled';

export function Contacts() {
  return (
    <ContainerStyled>
      <Row>
        <Col>
          <HeadingLevel1Styled>Контакты</HeadingLevel1Styled>
        </Col>
      </Row>
      <Row>
        <Col lg={4}>
          <ContactsWidget />
        </Col>
        <Col lg={8}>
          <MapWidget />
        </Col>
      </Row>
      <Row>
        <Col>
          <Company />
        </Col>
      </Row>
    </ContainerStyled>
  );
}
