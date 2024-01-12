import { Col, Container, Row } from "@autrm/common/components/grid";
import { Footer } from "@autrm/components/Footer";

export function Home() {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            #Home
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}