export function GoogleDocViewer() {
  const doc_uri = window.location.origin + '/contract.pdf';

  return (
    <embed
      src={'https://drive.google.com/viewerng/viewer?embedded=true&url=' + doc_uri}
      width="100%"
      height="700"
    />
  );
}
