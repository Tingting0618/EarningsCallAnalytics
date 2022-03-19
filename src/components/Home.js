import React from "react"
import { SearchBar } from "./header/Header"
import { WordTrends } from "./analyses/WordTrends"
import { TopWords } from "./analyses/TopWords"
import { SentimentAnalysis } from "./analyses/Sentiment"
import { NavBar } from "./header/NavBar"

export const Home = () => {
    return (
        <>  
            {/* <NavBar/> */}
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