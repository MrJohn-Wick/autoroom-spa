import { Container, Row, Col } from '@autrm/common/components/grid';
import DocViewer, { MSDocRenderer, PNGRenderer } from '@cyntler/react-doc-viewer';

export function Contract() {
  const docs = [
    {
      uri: '/logo512.png',
    },
    {
      uri: require('./test.docx'),
    },
  ];

  return (
    <Container>
      <Row>
        <Col>
          <DocViewer
            documents={docs}
            pluginRenderers={[MSDocRenderer, PNGRenderer]}
          />
        </Col>
      </Row>
    </Container>
  );
}
