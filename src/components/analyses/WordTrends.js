import React, { useContext } from "react"
import "./Analysis.css"
import { CompanyContext } from "../company/CompanyProvider";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top'
        },
        title: {
            display: true,
            text: 'Word Trends',
        },
    },
};


export const WordTrends = () => {

    const { companyAnalysis } = useContext(CompanyContext)

    const labels = []
    const trend_companies = []
    const count = []
    const year = []
    const quarter = []
    const wordsArray = companyAnalysis.trends

    // if (wordsArray === undefined || wordsArray === null) {
    // } else if (wordsArray !== null) {
    // const uniques_companies = wordsArray.map(item => item.trend_companies)
    //     .filter((value, index, self) => self.indexOf(value) === index)
    // console.log(uniques_companies) }

    if (wordsArray === undefined || wordsArray === null) {
    } else if (wordsArray !== null) {
        wordsArray.forEach(element => trend_companies.push(element.companies)
            && count.push(element.trend_counts)
            && year.push(element.trend_year)
            && quarter.push(element.trend_quarter)
            && labels.push(element.trend_year.toString() + " Q" + element.trend_quarter.toString()));
    }

    const data = {
        labels,
        datasets: [
            {
                label: 'Company 1 Name',
                data: count,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            //   {
            //     label: 'Dataset 2',
            //     data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            //     borderColor: 'rgb(53, 162, 235)',
            //     backgroundColor: 'rgba(53, 162, 235, 0.5)',
            //   },
        ],
    };

    return (
        <section className="analysis" >
            <h3 className="analysis__name">Keyword Trends</h3>
            <Line options={options} data={data} />
        </section >
    )
}



// export const WordTrends = () => {
// const { companyAnalysis } = useContext(CompanyContext)
// const wordsArray = companyAnalysis.trends
//     return (
//       <LineChart
//         width={500}
//         height={300}
//         data={wordsArray}
//         margin={{
//           top: 5,
//           right: 30,
//           left: 20,
//           bottom: 5
//         }}
//       >
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="trend_year" />
//         <YAxis />
//         <Tooltip />
//         <Legend />
//         <Line
//           type="monotone"
//           dataKey="trend_counts"
//           stroke="#8884d8"
//           activeDot={{ r: 8 }}
//         />
//         {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
//       </LineChart>
//     );
//   }

