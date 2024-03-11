export function PdfViewer() {
  const doc_uri = window.location.origin + '/contract.pdf';

  return (
    <embed
      src={doc_uri}
      width="100%"
      height="700"
      type="application/pdf"
    />
  );
}
