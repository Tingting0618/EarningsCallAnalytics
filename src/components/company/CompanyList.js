import { CompanyContext } from "./CompanyProvider";
import React, { useContext, useEffect } from "react"

export const CompanyList = () => {
    const { companyAnalysis, getCompanyAnalysis } = useContext(CompanyContext)

    useEffect(() => {
        getCompanyAnalysis()
    }, [])

    return (
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
    )
}