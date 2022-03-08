import { CompanyContext } from "./CompanyProvider";
import React, { useContext, useEffect } from "react"

export const CompanyList = () => {
    const { companies, getCompanies } = useContext(CompanyContext)

    useEffect(() => {
        getCompanies()
    }, [])

    return (
        <section >
            {
                companies.map(company => {
                    return (
                    <>
                        Name: {company.value}
                    </>
                    )
                })
            }
        </section>
    )
}