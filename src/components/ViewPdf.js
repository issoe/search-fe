import React, { useState, useRef } from 'react';
import { usePdf } from '@mikecousins/react-pdf';

export default function ViewPdf(props) {
    const [page, setPage] = useState(14);
    const canvasRef = useRef(null);
  
    const { pdfDocument, pdfPage } = usePdf({
      file: 'SRS.pdf',
      page,
      canvasRef,
    });
  
    return (
      <div>
        {!pdfDocument && <span>Loading...</span>}
        <canvas ref={canvasRef} />
        {Boolean(pdfDocument && pdfDocument.numPages) && (
          <nav>
            <ul className="pager">
              <li className="previous">
                <button disabled={page === 1} onClick={() => setPage(page - 1)}>
                  Previous
                </button>
              </li>
              <li className="next">
                <button
                  disabled={page === pdfDocument.numPages}
                  onClick={() => setPage(page + 1)}
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    );
}