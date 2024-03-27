import AutoCheckIcon from '@autrm/assets/icons/auto-check.webp';
import Car1Icon from '@autrm/assets/icons/car-1.png';
import Car2Icon from '@autrm/assets/icons/car-2.png';
import CarFaxIcon from '@autrm/assets/icons/carfax.webp';
import { Col, Row } from '@autrm/common/components/grid';
import { HeadingLevel4, HeadingLevel3 } from '@autrm/common/tokens/typography';
import { ServiceCard } from '@autrm/pages/Pay/components/ServiceCard';

import { getNewState } from './helpers';
import { FootnoteStyled } from './styled';

export function Services({ formState, setFormState }: any) {
  return (
    <>
      <Row>
        <Col>
          <HeadingLevel3>Сделайте выбор</HeadingLevel3>
        </Col>
      </Row>
      <Row>
        <Col>
          <HeadingLevel4>Основные платежи</HeadingLevel4>
        </Col>
      </Row>
      <Row
        lgMt="30px"
        rowGap="24px"
      >
        <Col lg={6}>
          <ServiceCard
            title="Оплата услуги"
            amount={700}
            image={Car1Icon}
            imageSizes={{
              w: '120',
              h: '120',
            }}
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
            image={Car2Icon}
            imageSizes={{
              w: '120',
              h: '120',
            }}
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
      <Row>
        <Col lg={12}>
          <FootnoteStyled>
            <span>*</span>
            <p>В размер обеспечительного платежа включена стоимость услуг согласно тарифам.</p>
            <p>
              В случае положительного исхода торгов возврату подлежит разница между обеспеченным
              платежом и стоимостью оказываемых услуг.
            </p>
          </FootnoteStyled>
        </Col>
      </Row>
      <Row
        lgMt="60px"
        mdMt="60px"
        mt="60px"
      >
        <Col>
          <HeadingLevel4>Дополнительные платежи</HeadingLevel4>
        </Col>
      </Row>
      <Row
        lgMt="30px"
        rowGap="24px"
      >
        <Col lg={6}>
          <ServiceCard
            title="Проверка CarFax"
            amount={10}
            image={CarFaxIcon}
            imageSizes={{
              w: '150',
              h: '120',
            }}
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
            title="Расширенный отчет Copart"
            amount={10}
            image={AutoCheckIcon}
            imageSizes={{
              w: '120',
              h: '120',
            }}
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
