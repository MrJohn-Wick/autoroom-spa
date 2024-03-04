import { Container, Row, Col } from '@autrm/common/components/grid';

export function Contract() {
  return (
    <Container>
      <Row>
        <Col>
          <h1
            style={{
              textAlign: 'center',
              marginBottom: '50px',
            }}
          >
            ДОГОВОР №_____
          </h1>
          <div
            style={{
              display: 'flex',
            }}
          >
            <div>г. Витебск, Республика Беларусь</div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'end',
              }}
            >
              «22» февраля 2024г.
            </div>
          </div>
          <p>
            Гражданин (ка)____________________________, именуемый(ая) в дальнейшем «Заказчик», с
            одной стороны и Частное торговое унитарное предприятие «ВитЛайкКофе», именуемое в
            дальнейшем «Исполнитель», в лице директора Кагукина Виталия Александровича, действующего
            на основании Устава, с другой стороны, а вместе именуемые в дальнейшем «Стороны»,
            заключили настоящий договор о нижеследующем:
          </p>
        </Col>
      </Row>
    </Container>
  );
}
