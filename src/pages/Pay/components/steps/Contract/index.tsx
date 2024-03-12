import { Checkbox } from 'antd';
import { Link } from 'react-router-dom';

// import { Col, Row } from '@autrm/common/components/grid';
import { HtmlContract } from '@autrm/pages/Contract/components/HtmlContract';
import { HtmlContractP1 } from '@autrm/pages/Contract/components/HtmlContractP1';
import { getNewState } from '@autrm/pages/Pay/components/helpers';

import { ContractSectionStyled } from './styled';

export function Contract({ formState, setFormState }: any) {
  return (
    <>
      <ContractSectionStyled>
        <HtmlContract />
        <hr />
        <HtmlContractP1 />
      </ContractSectionStyled>
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
    </>
  );
}
