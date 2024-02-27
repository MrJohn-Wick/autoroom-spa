import { Col, Container, Row } from '@autrm/common/components/grid';
import { HeadingLevel2 } from '@autrm/common/tokens/typography';

import { InstaBranding } from './InstaBranding';
import { InstaFeed } from './InstaFeed';
import { LayoutStyled, SectionStyled, TitleStyled } from './styled';

export function InstaSection() {
  return (
    <SectionStyled>
      <Container>
        <Row>
          <Col>
            <TitleStyled>
              <HeadingLevel2>Подписывайтесь на наш Instagram</HeadingLevel2>
            </TitleStyled>
          </Col>
        </Row>
        <Row>
          <Col>
            <LayoutStyled>
              <InstaBranding />
              <InstaFeed />
            </LayoutStyled>
          </Col>
        </Row>
      </Container>
    </SectionStyled>
  );
}
