import React, { useContext } from "react"
import "./Analysis.css"
import { CompanyContext } from "../company/CompanyProvider";


export const Analysis1 = () => {
    const { companyAnalysis } = useContext(CompanyContext)
    // debugger
    return (
        <section className="analysis">
            <h3 className="analysis__name">Get Words Frequency</h3>
            <section >

            </section>
        </section>
    )
}