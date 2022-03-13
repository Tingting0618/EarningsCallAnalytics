import React, { useContext } from "react"
import "./Analysis.css"
import { CompanyContext } from "../company/CompanyProvider";


export const WordTrends = () => {
    const { companyAnalysis } = useContext(CompanyContext)
    // debugger
    return (
        <section className="analysis">
            <h3 className="analysis__name">The Word Trends</h3>
            <section >

            </section>
        </section>
    )
}