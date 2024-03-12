import { useState } from 'react';

import { Steps, Button } from 'antd';

import { Col, Container, Row } from '@autrm/common/components/grid';

import { SumSection } from './components/SumSection';
import { getButtonState } from './components/helpers';
import { Contract } from './components/steps/Contract';
import { Payment } from './components/steps/Payment';
import { Services } from './components/steps/Services';
import { UserDetails } from './components/steps/UserDetails';
import { ColButtonsStyled } from './styled';

export function Pay() {
  const [currentStep, setStep] = useState(0);
  const [formState, setFormState] = useState({
    service: null,
    price: 0,
    isContractApproved: false,
    firstName: '',
    secondName: '',
    subName: '',
    phone: '',
    email: '',
    isConsentApproved: false,
  });

  const getStep = (step: number) => {
    switch (step) {
      case 0:
        return (
          <Services
            formState={formState}
            setFormState={setFormState}
          />
        );
      case 1:
        return (
          <Contract
            formState={formState}
            setFormState={setFormState}
          />
        );
      case 2:
        return (
          <UserDetails
            formState={formState}
            setFormState={setFormState}
          />
        );
      case 3:
        return <Payment />;
      default:
        return (
          <Services
            formState={formState}
            setFormState={setFormState}
          />
        );
    }
  };

  return (
    <Container>
      <Row
        lgMt="48px"
        lgMb="72px"
        mdMt="32px"
        mdMb="48px"
        mt="32px"
        mb="32px"
      >
        <Col>
          <Steps
            current={currentStep}
            items={[
              {
                title: 'Выбор услуги',
                description: 'Выберите услугу для оплаты',
              },
              {
                title: 'Договор аферты',
                description: 'Ознакомьтесь с договором',
              },
              {
                title: 'Данные клиента',
                description: 'Заполните поля',
              },
              {
                title: 'Оплата',
                description: 'Выберите способ оплаты',
              },
            ]}
          />
        </Col>
      </Row>
      <Row>
        <Col lg={8}>{getStep(currentStep)}</Col>
        <Col
          lg={4}
          smMargin="48px 0"
          mdMargin="0"
        >
          <SumSection formState={formState} />
        </Col>
      </Row>
      <Row
        lgMt="56px"
        lgMb="56px"
      >
        <ColButtonsStyled>
          {currentStep >= 1 && (
            <Button
              type="default"
              size="large"
              onClick={() => setStep(currentStep - 1)}
            >
              Назад
            </Button>
          )}
          <Button
            type="primary"
            size="large"
            disabled={getButtonState(currentStep, formState) || false}
            onClick={() => setStep(currentStep + 1)}
          >
            Далее
          </Button>
        </ColButtonsStyled>
      </Row>
    </Container>
  );
}
