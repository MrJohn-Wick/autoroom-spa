import { Checkbox, Form, Input } from 'antd';

import { Col, Container, Row } from '@autrm/common/components/grid';

export function UserDetails() {
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <Container>
      <Form
        {...layout}
        form={form}
        layout="vertical"
        name="control-hooks"
        onFinish={onFinish}
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
              <Input placeholder="Введите свою фамилию" />
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
              <Input placeholder="Введите свое имя" />
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
              <Input placeholder="Введите свое отчество" />
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
              <Input placeholder="Введите свой номер телефона" />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <Form.Item
              name="secondName"
              label="Фамилия"
              rules={[
                {
                  required: true,
                  message: 'Пожалуйста введите email',
                },
              ]}
            >
              <Input placeholder="Введите свой email" />
            </Form.Item>
          </Col>
          <Col lg={6} />
        </Row>
      </Form>
      <Row>
        <Col lg={8}>
          <Checkbox onChange={() => null}>
            Я согласен(на) на обработку моих персональных данных.
          </Checkbox>
        </Col>
      </Row>
    </Container>
  );
}
