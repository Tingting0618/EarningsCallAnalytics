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
    Legend
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
            text: 'Top 10 Frequently Mentioned Words',
        },
    },
};


export const TopWords = () => {

    const { companyAnalysis } = useContext(CompanyContext)

    const labels = []
    const freq = []
    const wordsArray = companyAnalysis.topWords
    if (wordsArray === undefined || wordsArray === null) {
    } else if (wordsArray !== null) {
        wordsArray.forEach(element => labels.push(element.words) && freq.push(element.freq));
    }

    const data = {
        labels,
        datasets: [
            {
                label: 'How many times a word has been mentioned',
                data: freq,
                backgroundColor: 'rgba(111, 155, 189, 0.8)',
            }
        ],
    };

    return (
        <section className="analysis" >
            <h3 className="analysis__name">Get Words Frequency</h3>
            <Bar options={options} data={data} />
        </section >
    )
}






