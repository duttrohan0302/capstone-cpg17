import { useEffect, useState } from "react";
import AnalysisLayout from "../components/Layout/AnalysisLayout";
import axios from 'axios';

function StudentPercentilePage() {

  const [percentiles,setPercentiles] = useState(null);

  useEffect(()=>{
    const getPercentiles = async () =>{
      try{
        const data = await axios.get("http://localhost:5000/percentile")

        setPercentiles(data.data.percentiles)
      }catch(err){
        console.log(err)
      }

    }

    getPercentiles()
  },[])

  console.log(percentiles)
  return (
    <AnalysisLayout>
      <section>
        <h1 className="display-4">Student Percentile</h1>
        {
          percentiles ?
          <table className="table table-striped table-dark">
            <thead className="thead-dark">
              <tr>
                <th colSpan={2}>Marks</th>
                <th colSpan={2}>Percentile</th>
              </tr>
              <tr>
                <th>To</th>
                <th>From</th>
                <th>To</th>
                <th>From</th>
              </tr>
            </thead>
            <tbody>
              {
                percentiles.map((percentile,index)=>{
                    return (
                      index <=9 ?
                      <tr>
                        <td>{index*10}</td>
                        <td>{(index+1)*10}</td>
                        <td>{(percentile).toFixed(2)}</td>
                        <td>{(percentiles[index+1]).toFixed(2)}</td>
                      </tr>
                      :
                      null
                    )
                })
              }
              {/* {
                
              } */}
            </tbody>
          </table>
          :
          null
        }
      </section>
    </AnalysisLayout>
  );
}

export default StudentPercentilePage;
