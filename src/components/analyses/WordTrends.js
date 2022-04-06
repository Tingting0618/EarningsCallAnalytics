import React, { useContext, PureComponent } from "react"
import "./Analysis.css"
import { CompanyContext } from "../company/CompanyProvider";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// import {currentKeywords} from "../search/SearchBar";
// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend
// } from 'chart.js';
// import { Bar } from 'react-chartjs-2';
// ChartJS.register(CategoryScale, LinearScale, BarElement, Title,
//     Tooltip,
//     Legend
// );

// export const options = {
//     responsive: true,
//     plugins: {
//         legend: {
//             position: 'top'
//         },
//         title: {
//             display: true,
//             text: 'Word Trends',
//         },
//     },
// };


// export const WordTrends = () => {

//     const { companyAnalysis } = useContext(CompanyContext)

//     const labels = []
//     const count = []
//     const year = []
//     const quarter = []
//     const wordsArray = companyAnalysis.trends
//     if (wordsArray === undefined || wordsArray === null) {
//     } else if (wordsArray !== null) {
//         wordsArray.forEach(element => labels.push(element.companies) && count.push(element.trend_counts)
//         && year.push(element.trend_year)
//         && quarter.push(element.trend_quarter));
//     }

//     const data = {
//         labels,
//         datasets: [
//             {
//                 label: `How many times has been mentioned`,
//                 data: count,
//                 backgroundColor: 'rgba(111, 155, 189, 0.8)',
//             }
//         ],
//     };

//     return (
//         <section className="analysis" >
//             <h3 className="analysis__name">Keyword Trends</h3>
//             <Bar options={options} data={data} />
//         </section >
//     )
// }



export const WordTrends = () => {
const { companyAnalysis } = useContext(CompanyContext)
const wordsArray = companyAnalysis.trends
    return (
      <LineChart
        width={500}
        height={300}
        data={wordsArray}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="trend_year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="trend_counts"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
      </LineChart>
    );
  }
  
// export default class WordTrends extends PureComponent {

//     // static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';
    

//     render() {
//     return (
//         <ResponsiveContainer width="100%" height="100%">
//             <LineChart
//                 width={500}
//                 height={300}
//                 data={wordsArray}
//                 margin={{
//                     top: 5,
//                     right: 30,
//                     left: 20,
//                     bottom: 5,
//                 }}
//             >
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="trend_year" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Line type="monotone" dataKey="trend_counts" stroke="#8884d8" activeDot={{ r: 8 }} />
//                 {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
//             </LineChart>
//         </ResponsiveContainer>
//     );
// }}





