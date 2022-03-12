import React, { useContext } from "react"
import "./Analysis.css"
import { CompanyContext } from "../company/CompanyProvider";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title,
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
            text: 'Chart.js Bar Chart',
        },
    },
};


export const Analysis2 = () => {

    const { companyAnalysis } = useContext(CompanyContext)
    const labels = []
    const freq = []
    companyAnalysis.forEach(element => labels.push(element.words) && freq.push(element.freq));

    const data = {
        labels,
        datasets: [
            {
                label: 'How many times a word has been mentioned',
                data: freq,
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ],
    };
    const options = {
        plugins: {
            title: {
                display: true,
                text: 'Top 10 Frequently Mentioned Words'
            }
        }
    }
   
    return (
        <section className="analysis" >
            <h3 className="analysis__name">Get Words Frequency</h3>
            <Bar options={options} data={data}  />
        </section >
    )
}






