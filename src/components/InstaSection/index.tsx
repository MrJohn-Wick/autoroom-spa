import { InstaFeed } from './InstaFeed';
import { HeadingLevel2 } from '@autrm/common/tokens/typography';
import { Col, Container, Row } from '@autrm/common/components/grid';
import { LayoutStyled, SectionStyled, TitleStyled } from './styled';
import { InstaBranding } from './InstaBranding';

export function InstaSection() {
  return (
    <SectionStyled>
      <Container>
        <Row>
          <Col>
            <TitleStyled>
              <HeadingLevel2>Follow as on Instagram</HeadingLevel2>
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
