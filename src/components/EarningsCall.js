import React from "react"
import { SearchBar } from "./header/Header"
import { WordTrends } from "./analyses/WordTrends"
import { TopWords } from "./analyses/TopWords"
import { CompanyProvider } from "./company/CompanyProvider"
import "./EarningsCall.css"
import { SentimentAnalysis } from "./analyses/Sentiment"

export const EarningsCall = () => (
    <>
        <CompanyProvider>
            <h2>Earnings Call Text Analytics Platform</h2>
            <SearchBar />

            <h2>Analysis</h2>
            <article className="analyses">
                <TopWords />
                <WordTrends />
                <SentimentAnalysis />
            </article>
        </CompanyProvider>
    </>

)