import AnalysisLayout from "../components/Layout/AnalysisLayout";
import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from 'react-pdf';
// import pdfPaper from '../output/Paper_Analysed.pdf'
import axios from "axios";
function AnalysisPage() {
  // const [pageNumber, setPageNumber] = useState(1);

  const [numPages, setNumPages] = useState(null);

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  const [paper, setPaper] = useState(null)

  useEffect(() => {

    const viewHandler = async () => {
      axios('/analysed-paper', {
        method: "GET",
        responseType: "blob"
      })
        .then(response => {
          const file = new Blob([response.data], {
            type: "application/pdf"
          });
          setPaper(file)
          // setPaper(response.data.pdf)
        })
        .catch(error => {
          console.log(error);
        });
    };
    viewHandler()
  }, [])

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <section>
      <AnalysisLayout>
        <section>
          <h1>Analysis of papers</h1>

          {
            paper ?
              <div>
                <Document
                  file={
                    paper
                    // `data:application/pdf;base64,${paper}`
                  }
                  onLoadSuccess={onDocumentLoadSuccess}
                >
                  {Array.apply(null, Array(numPages))
                    .map((x, i) => i + 1)
                    .map((page,index) =>
                      <div key={index}>
                        <Page pageNumber={page} />
                        <br />
                      </div>
                    )}
                </Document>
              </div>
              : <div><h2>No Question Paper Analysed</h2></div>
          }

        </section>
      </AnalysisLayout>
    </section>
  );
}

export default AnalysisPage;
