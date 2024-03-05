import AutoCheckIcon from '@autrm/assets/icons/auto-check.webp';
import CarFaxIcon from '@autrm/assets/icons/carfax.webp';
import { Button } from '@autrm/common/components/button';
import { Col, Container, Row } from '@autrm/common/components/grid';
import { HeadingLevel2, HeadingLevel3 } from '@autrm/common/tokens/typography';

import { ServiceCard } from './components/ServiceCard';
import { SumSection } from './components/SumSection';

export function Pay() {
  return (
    <Container>
      <Row>
        <Col lg={8}>
          <Row>
            <Col>
              <HeadingLevel2>Сделайте выбор</HeadingLevel2>
            </Col>
          </Row>
          <Row lgMt="30px">
            <Col>
              <HeadingLevel3>Основные платежи</HeadingLevel3>
            </Col>
          </Row>
          <Row lgMt="30px">
            <Col lg={6}>
              <ServiceCard
                title="Оплата услуги"
                amount={700}
              />
            </Col>
            <Col lg={6}>
              <ServiceCard
                title="Обеспечительный платеж"
                amount={1200}
              />
            </Col>
          </Row>
          <Row lgMt="30px">
            <Col>
              <HeadingLevel3>Дополнительные платежи:</HeadingLevel3>
            </Col>
          </Row>
          <Row lgMt="30px">
            <Col lg={6}>
              <ServiceCard
                title="Проверка CarFax"
                amount={10}
                image={CarFaxIcon}
              />
            </Col>
            <Col lg={6}>
              <ServiceCard
                title="Обеспечительный платеж"
                amount={10}
                image={AutoCheckIcon}
              />
            </Col>
          </Row>
          <Row lgMt="30px">
            <Col>
              <Button>Далее</Button>
            </Col>
          </Row>
        </Col>
        <Col lg={4}>
          <SumSection />
        </Col>
      </Row>
    </Container>
  );
}
