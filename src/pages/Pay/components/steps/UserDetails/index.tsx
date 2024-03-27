import { Checkbox, Form, Input } from 'antd';

import { Col, Container, Row } from '@autrm/common/components/grid';

import { getNewState } from '../../helpers';
// import { MaskedInput } from 'antd-mask-input';

export function UserDetails({ formState, setFormState }: any) {
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  // const [form] = Form.useForm();

  return (
    <Container>
      <Form
        {...layout}
        // form={form}
        layout="vertical"
        name="control-hooks"
      >
        <Row rowGap="24px">
          <Col lg={6}>
            <Form.Item
              name="secondName"
              label="Фамилия"
              rules={[
                {
                  required: true,
                  message: 'Пожалуйста введите фамилию',
                },
              ]}
            >
              <Input
                placeholder="Введите свою фамилию"
                defaultValue={formState.secondName}
                onChange={(e: any) =>
                  setFormState(
                    getNewState(formState, {
                      secondName: e.target.value,
                    }),
                  )
                }
                value={formState.secondName}
              />
            </Form.Item>
          </Col>
          <Col lg={6}>
            <Form.Item
              name="firstName"
              label="Имя"
              rules={[
                {
                  required: true,
                  message: 'Пожалуйста введите имя',
                },
              ]}
            >
              <Input
                placeholder="Введите свое имя"
                defaultValue={formState.firstName}
                onChange={(e: any) =>
                  setFormState(
                    getNewState(formState, {
                      firstName: e.target.value,
                    }),
                  )
                }
                value={formState.firstName}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row rowGap="24px">
          <Col lg={6}>
            <Form.Item
              name="subName"
              label="Отчество"
              rules={[
                {
                  required: true,
                  message: 'Пожалуйста введите отчество',
                },
              ]}
            >
              <Input
                placeholder="Введите свое отчество"
                defaultValue={formState.subName}
                onChange={(e: any) =>
                  setFormState(
                    getNewState(formState, {
                      subName: e.target.value,
                    }),
                  )
                }
                value={formState.subName}
              />
            </Form.Item>
          </Col>
          <Col lg={6}>
            <Form.Item
              name="phone"
              label="Телефон"
              rules={[
                {
                  required: true,
                  message: 'Пожалуйста введите номер телефона',
                },
              ]}
            >
              <Input
                // mask={'+375(00)000-00-00'}
                placeholder="Введите свой номер телефона"
                defaultValue={formState.phone}
                onChange={(e: any) =>
                  setFormState(
                    getNewState(formState, {
                      phone: e.target.value,
                    }),
                  )
                }
                value={formState.phone}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  required: true,
                  type: 'email',
                  message: 'Пожалуйста введите email',
                },
              ]}
            >
              <Input
                placeholder="Введите свой email"
                defaultValue={formState.email}
                onChange={(e: any) =>
                  setFormState(
                    getNewState(formState, {
                      email: e.target.value,
                    }),
                  )
                }
                value={formState.email}
              />
            </Form.Item>
          </Col>
          <Col lg={6} />
        </Row>
      </Form>
      <Row>
        <Col lg={8}>
          <Checkbox
            onChange={() =>
              setFormState(
                getNewState(formState, {
                  isConsentApproved: !formState.isConsentApproved,
                }),
              )
            }
            checked={formState.isConsentApproved}
          >
            Я согласен(на) на обработку моих персональных данных.
          </Checkbox>
        </Col>
      </Row>
    </Container>
  );
}
