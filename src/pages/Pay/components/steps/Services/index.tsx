import AutoCheckIcon from '@autrm/assets/icons/auto-check.webp';
import CarFaxIcon from '@autrm/assets/icons/carfax.webp';
import { Col, Row } from '@autrm/common/components/grid';
import { HeadingLevel2, HeadingLevel3 } from '@autrm/common/tokens/typography';
import { ServiceCard } from '@autrm/pages/Pay/components/ServiceCard';

import { getNewState } from './helpers';

export function Services({ formState, setFormState }: any) {
  return (
    <>
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
            isActive={formState.service === 1}
            onClick={() =>
              setFormState(
                getNewState(formState, {
                  service: 1,
                  price: 700,
                }),
              )
            }
          />
        </Col>
        <Col lg={6}>
          <ServiceCard
            title="Обеспечительный платеж"
            amount={1200}
            isActive={formState.service === 2}
            onClick={() =>
              setFormState(
                getNewState(formState, {
                  service: 2,
                  price: 1200,
                }),
              )
            }
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
            isActive={formState.service === 3}
            onClick={() =>
              setFormState(
                getNewState(formState, {
                  service: 3,
                  price: 10,
                }),
              )
            }
          />
        </Col>
        <Col lg={6}>
          <ServiceCard
            title="Обеспечительный платеж"
            amount={10}
            image={AutoCheckIcon}
            isActive={formState.service === 4}
            onClick={() =>
              setFormState(
                getNewState(formState, {
                  service: 4,
                  price: 10,
                }),
              )
            }
          />
        </Col>
      </Row>
    </>
  );
}
