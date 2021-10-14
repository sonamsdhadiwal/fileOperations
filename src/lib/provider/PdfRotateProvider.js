import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import file from './sample.pdf';
export default function PdfRotateProvider() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} scale={1.5} rotate={90} />
      </Document>
      <p>Page {pageNumber} of {numPages}</p>
    </div>
  );
}