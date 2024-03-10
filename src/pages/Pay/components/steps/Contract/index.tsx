import { Checkbox } from 'antd';
import { Link } from 'react-router-dom';

import { Col, Row } from '@autrm/common/components/grid';
import { getNewState } from '@autrm/pages/Pay/components/helpers';

export function Contract({ formState, setFormState }: any) {
  return (
    <Row>
      <Col lg={8}>
        <Checkbox
          onChange={() =>
            setFormState(
              getNewState(formState, {
                isContractApproved: !formState.isContractApproved,
              }),
            )
          }
          checked={formState.isContractApproved}
        >
          Заказчик подтверждает, что ознакомился с <Link to="/contract">Договором</Link>.
        </Checkbox>
      </Col>
    </Row>
  );
}
