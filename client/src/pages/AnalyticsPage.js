import axios from "axios";
import { useEffect, useState } from "react";
import AnalysisLayout from "../components/Layout/AnalysisLayout";
import { Bar, Pie } from 'react-chartjs-2';
import ChartDataLabels from "chartjs-plugin-datalabels";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const bgColor = [
  '#FF6384',
  '#36A2EB',
  '#FFCE56',
  '#E59866',
  '#F1948A',
  '#52BE80',
  '#85C1E9',
  '#E59866',
  '#5499C7'
]
const hoverBgColor = [
  '#FF6384',
  '#36A2EB',
  '#FFCE56',
  '#D35400',
  '#E74C3C',
  '#1E8449',
  '#2E86C1',
  '#D35400',
  '#2471A3'
]

function AnalyticsPage() {

  const [difficultyWise, setDifficultyWise] = useState(null)
  const [topicWise, setTopicWise] = useState(null)
  useEffect(() => {

    const getAnalytics = async () => {

      try {
        const data = await axios.get("http://localhost:5000/analytics")
        setDifficultyWise(data.data.difficultyWise)
        setTopicWise(data.data.topicWise)
      } catch (error) {
        console.log(error)
      }

    }

    getAnalytics();
  }, [])

  const topicDataEasy = {
    labels: difficultyWise ? difficultyWise.easy.map(x => x.topic) : [],
    datasets: [{
      data: difficultyWise ? difficultyWise.easy.map(x => x.count) : [],
      backgroundColor: bgColor,
      hoverBackgroundColor: hoverBgColor,
      hoverOffset: 3

    }]
  };
  const topicDataMedium = {
    labels: difficultyWise ? difficultyWise.medium.map(x => x.topic) : [],
    datasets: [{
      label: "Medium Difficulty",
      data: difficultyWise ? difficultyWise.medium.map(x => x.count) : [],
      backgroundColor: bgColor,
      hoverBackgroundColor: hoverBgColor,
      hoverOffset: 3
    }]
  };
  const topicDataHard = {
    labels: difficultyWise ? difficultyWise.hard.map(x => x.topic) : [],
    datasets: [{
      data: difficultyWise ? difficultyWise.hard.map(x => x.count) : [],
      backgroundColor: bgColor,
      hoverBackgroundColor: hoverBgColor,
      hoverOffset: 3

    }]
  };

  const barData = {
    labels: topicWise ? topicWise.map(x=>x.topic) : [],
    datasets: [
      {
        label: "Easy",
        data: topicWise ? topicWise.map(x=>x.easy) : [],
        backgroundColor: 'rgb(255, 99, 132)',
        borderWidth: 1
      },
      {
        label: "Medium",
        data: topicWise ? topicWise.map(x=>x.medium) : [],
        backgroundColor: 'rgb(75, 192, 192)',
        borderWidth: 1
      },
      {
        label: "Hard",
        data: topicWise ? topicWise.map(x=>x.hard) : [],
        backgroundColor: 'rgb(204, 153, 0)',
        borderWidth: 1
      }
    ]
  }
  console.log(difficultyWise)
  return (
    <AnalysisLayout>
      <section>
        <h1  className="display-3">Analytics</h1>
        {

          difficultyWise ?
            <div className="container mb-10">
              <h2 className="display-4">Difficulty Wise Analysis</h2>
              <div className="row">
                <div className="col-md-4">
                  <Pie
                    options ={{
                      plugins: {
                        title: {
                          display: true,
                          text: 'Easy',
                        },
                      }
                    }}
                    data={topicDataEasy}
                    plugins={[ChartDataLabels]}

                  />
                </div>
                <div className="col-md-4">
                  <Pie
                    data={topicDataMedium}
                    options ={{
                      plugins: {
                        title: {
                          display: true,
                          text: 'Medium',
                        },
                      }
                    }}
                    plugins={[ChartDataLabels]}

                  ></Pie>
                </div>
                <div className="col-md-4">
                  <Pie
                    data={topicDataHard}
                    plugins={[ChartDataLabels]}
                    options ={{
                      plugins: {
                        title: {
                          display: true,
                          text: 'Hard',
                        },
                      }
                    }}
                  />
                </div>
              </div>
            </div>
            :
            <div>Nothing to show</div>
        }
        {
          topicWise ? 
          <div className="container" style={{marginTop:"50px"}}>
              <h2 className="display-4">Topic Wise Analysis</h2>
              <div className="row">
                <div className="col-md-12">
                  <Bar data={barData} options = {{
                    responsive: true,
                    scales: {
                      x: {
                        stacked: true,
                      },
                      y: {
                        stacked: true,
                        beginAtZero: true
                      },
                    }
                  }} />
                </div>
              </div>
          </div>
          :
          <div></div>
        }

      </section>
    </AnalysisLayout>
  );
}

export default AnalyticsPage;
