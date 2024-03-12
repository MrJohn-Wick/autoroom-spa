import { Row, Col, Container } from '@autrm/common/components/grid';
import { HtmlContract } from './components/HtmlContract';
// import { GoogleDocViewer } from './components/GoogleDocViewer';
// import { DocViewer } from './components/DocViewer';
// import { PdfViewer } from './components/PdfViewer';

export function Contract() {
  return (
    <Container>
      <Row>
        <Col>
          {/* <DocViewer /> */}
          {/* <PdfViewer /> */}
          {/* <GoogleDocViewer /> */}
          <HtmlContract />
        </Col>
      </Row>
    </Container>
  );
}
