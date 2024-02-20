import { Container, Row } from '@autrm/common/components/grid';
import { HowItWork } from '@autrm/components/HowItWork';
import { Search } from '@autrm/components/Search';

import { ColStyled } from './styled';

export function TrackingSearch() {
  return (
    <>
      <Container>
        <Row>
          <ColStyled>
            <Search />
          </ColStyled>
        </Row>
      </Container>
      <HowItWork />
    </>
  );
}
