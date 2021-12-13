import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import Card from "../components/Ui/Card";
import classes from "./SamplePaper.module.css";
import { Document, Page, pdfjs } from 'react-pdf';

function SamplePaperGenerationPage() {
  
  const [difficulty, setDifficulty] = useState("easy");
  
  const [numPages, setNumPages] = useState(null);

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  const [paper, setPaper] = useState(null)

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  const submitHandler = async (event) => {
    event.preventDefault();
    console.log(difficulty)


    try{
      const response = await axios(`http://localhost:5000/generate/${difficulty}`,{
        method: "GET",
        responseType: "blob"
      })
      const file = new Blob([response.data], {
        type: "application/pdf"
      });
      setPaper(file)
      // console.log(response)
    }catch(error){
      console.log(error)
    }


  }

  const setDiff = (e) => {
    setDifficulty(e.target.value)
  }
  return (
    <Layout>
      <h1  className="display-4">Sample Paper Generation</h1>
      <Card>
        <form className={classes.form} onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="Subject">Select Subject</label>
            <select id="Subject" name="Subject">
              <option value="DSA">Data Structures and Algorithms</option>
              <option value="OS">Operating Systems</option>
              <option value="CN">Computer Networks</option>
              <option value="DBMS">DataBase Management Systems</option>
            </select>
          </div>
          <div className={classes.control}>
            <label htmlFor="Difficulty">Select Difficulty Level</label>
            <select id="Difficulty" name="difficulty" value={difficulty} onChange={setDiff}>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <div className={classes.actions} style={{transform:`scale(0.9)`}}>
            <button onClick={submitHandler}>Generate Sample Paper</button>
          </div>
          <br />
        </form>
 
      </Card>
      <Card style={{marginTop: "50px"}}>
      <div style={{marginTop:"20px"}}>
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
                      <div key={index} style={{marginTop:"20px"}}>
                        <Page pageNumber={page} style={{marginTop:"10%"}} />
                        <br />
                      </div>
                    )}
                </Document>
              </div>
              : <div></div>
          }
        </div>
      </Card>
    </Layout>
  );
}

export default SamplePaperGenerationPage;
