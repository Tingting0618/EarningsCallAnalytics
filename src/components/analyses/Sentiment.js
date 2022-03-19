import React, { useContext, useEffect } from "react"
import "./Analysis.css"
import { CompanyContext } from "../company/CompanyProvider";


export const SentimentAnalysis = () => {

    const { companyAnalysis } = useContext(CompanyContext)

    if (companyAnalysis.sentimentWords && companyAnalysis.sentimentWords.length >= 1) {
        return (
            <section className="analysis" >
                <h3 className="analysis__name">Sentiment Analysis</h3>
                <div className="senti_sentence">
                    {companyAnalysis.sentimentWords.map((i) => {
                        return (
                            <>
                                <div>Sentence:{i.sentences}</div>
                                <div>Sentiment score: {i.scores}</div>
                                <br />
                            </>
                        )
                    })}
                </div>
            </section >
        )
    }
    else {
        return (<section className="analysis" >
            <h3 className="analysis__name">Sentiment Analysis</h3>
            <div className="senti_sentence">
                Please input a keyword that is contained in the selected transcript(s).
            </div>
        </section >)
    }
}








