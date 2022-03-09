import React, {useContext} from "react"
import "./Analysis.css"
import { CompanyContext } from "../company/CompanyProvider";


export const Analysis1 = () => {
    const { companyAnalysis } = useContext(CompanyContext)
    
    return(
    <section className="analysis">
        <h3 className="analysis__name">Line Chart</h3>
        <div className="analysis__desc">This is a trend chart</div>
        <section >
                {
                    companyAnalysis.map(company => {
                        return (
                            <>
                                {company.transcript}
                            </>
                        )
                    })
                }
            </section>
    </section>
    )
}