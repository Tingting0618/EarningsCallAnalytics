import React from "react"
import { SearchBar } from "./search/SearchBar"
import { WordTrends } from "./analyses/WordTrends"
import { TopWords } from "./analyses/TopWords"
import { SentimentAnalysis } from "./analyses/Sentiment"
export const Home = () => {
    return (
        <>
                <SearchBar />
                <h2>Analysis</h2>
                <article className="analyses">
                    <TopWords />
                    <WordTrends />
                    <SentimentAnalysis />
                </article>
            </>
            )
}