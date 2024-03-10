import { useState } from 'react';

import { Steps, Button } from 'antd';

import { Col, Container, Row } from '@autrm/common/components/grid';

import { SumSection } from './components/SumSection';
import { getButtonState } from './components/helpers';
import { Contract } from './components/steps/Contract';
import { Payment } from './components/steps/Payment';
import { Services } from './components/steps/Services';
import { UserDetails } from './components/steps/UserDetails';

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
        return <UserDetails />;
      case 3:
        return <Payment />;
      default:
        return <Services />;
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
                description: 'sfsdfsdfsdf',
              },
              {
                title: 'Договор аферты',
                description: 'dasdasgs fsdfsd',
              },
              {
                title: 'Данные клиента',
                description: 'fs sss sss',
              },
              {
                title: 'Оплата',
                description: 'fs sss sss',
              },
            ]}
          />
        </Col>
      </Row>
      <Row>
        <Col lg={8}>{getStep(currentStep)}</Col>
        <Col lg={4}>
          <SumSection formState={formState} />
        </Col>
      </Row>
      <Row
        lgMt="56px"
        lgMb="56px"
      >
        <Col>
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
        </Col>
      </Row>
    </Container>
  );
}
