import { Row, Col, Container } from '@autrm/common/components/grid';

import { HtmlContract } from './components/HtmlContract';
import { HtmlContractP1 } from './components/HtmlContractP1';
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
          <hr />
          <HtmlContractP1 />
        </Col>
      </Row>
    </Container>
  );
}
