export function DocViewer() {
  const doc_uri = window.location.origin + '/contract.pdf';

  return (
    <iframe
      src={'https://view.officeapps.live.com/op/embed.aspx?src=' + doc_uri}
      width="100%"
      height="700"
    />
  );
}
