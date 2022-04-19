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


    const wordsArray = companyAnalysis.trends
 // const labels = []
 // const datasets=[]

    // if (wordsArray === undefined || wordsArray === null) {
    // } else if (wordsArray !== null) {
    // const uniques_companies = wordsArray.map(item => item.trend_companies)
    //     .filter((value, index, self) => self.indexOf(value) === index)
    // console.log(uniques_companies) }

    // if (wordsArray === undefined || wordsArray === null) {
    // } else if (wordsArray !== null) {
    //     wordsArray.forEach(element => 
    //         // trend_companies.push(element.companies)&&
    //         //  count.push(element.trend_counts)
    //         // && year.push(element.trend_year)
    //         // && quarter.push(element.trend_quarter)&& 
    //         datasets.push({label:element.label,
    //                         data:element.data.forEach(i=>count.push(i.trend_counts))}))
    // }
    const labels = ['January', 'February', 'March', 'April'];
    const data = {
        labels,
        datasets: [
            {
                label: 'Company 1 Name',
                data: [1,2,3,4],
            },
            {
                label: 'Company 2 Name',
                data: [2,4,5,7],
            }
        ],
    };

    return (
        <section className="analysis" >
            <h3 className="analysis__name">Keyword Trends</h3>
            <Line options={options} data={data} />
        </section >
    )
}
