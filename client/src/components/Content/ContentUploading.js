import Card from "../Ui/Card.js";
import classes from "./Content.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ContentUploading(props) {

  const navigate = useNavigate();
  const submitResponse = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("upload", pdfFile)

    try {
      const response = await axios.post("http://localhost:5000/analyse", formData, {
        headers: {
          "Content-type": "multipart/form-data",
        }
      })
      console.log("Its a success hopefully",response)
      navigate('/analysis-paper')
    } catch (err) {
      console.log("Error is",err)
    }
}

const [pdfFile, setPdfFile] = useState(null);

const setFile = (e) => {
  console.log(e.target.files)
  setPdfFile(e.target.files[0])
}
return (
  <Card>
    <section>
      <div className={classes.content}>
        <h1>Upload Question Paper</h1>
        <div>
          <p>File should Contain all the pages of the Question Paper</p>
        </div>
      </div>
      <div className={classes.actions}>
        {/* <Link to=""> */}
        <form id="form">
          <input type="file" name="upload" onChange={setFile} />
          <button className="submit-btn" type='submit' onClick={submitResponse}>Upload</button>
        </form>
        {/* <form method="POST" enctype='multipart/form-data'>
            
            <input type="file" name="upload"/>
            <input type="submit" class="button stroke" value="Upload" />

            <button>Add File</button>
          
          </form> */}
        {/* </Link> */}
      </div>
    </section>
  </Card>
);
}

export default ContentUploading;
