import { Col, Container, Row } from '@autrm/common/components/grid';
import { colorGrey300 } from '@autrm/common/tokens/colors';
import { HeadingLevel1, RegularTextLevel2 } from '@autrm/common/tokens/typography';
import { Calc } from '@autrm/components/Calc';

export function Calculator() {
  return (
    <Container
      pt="50px"
      pb="70px"
    >
      <Row mb="30px">
        <Col lg={12}>
          <div>
            <HeadingLevel1>Калькулятор расходов</HeadingLevel1>
            <RegularTextLevel2 color={colorGrey300}>
              Все цены актуальны на момент расчета и могут измениться на момент доставки. В расчет
              не входят комиссии за переводы.
            </RegularTextLevel2>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <Calc />
        </Col>
      </Row>
    </Container>
  );
}
