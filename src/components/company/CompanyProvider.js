import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const CompanyContext = createContext()

// This component establishes what data can be used.
export const CompanyProvider = (props) => {
    const [companies, setCompanies] = useState([])
    const [companyAnalysis, setCompanyAnalysis] = useState([])

    const getCompanies = () => {
        return fetch("http://localhost:8000/companies", {
            headers: {
              Authorization: `Token fa2eba9be8282d595c997ee5cd49f2ed31f65bed`,
            //   Authorization: `Token ${localStorage.getItem("lu_token")}`,
            },
          })
        .then(res => res.json())
        .then(setCompanies)
    }

    const getCompanyAnalysis = (param) => {
        return fetch("http://localhost:8000/companies"+param, {
            headers: {
              Authorization: `Token fa2eba9be8282d595c997ee5cd49f2ed31f65bed`,
            //   Authorization: `Token ${localStorage.getItem("lu_token")}`,
            },
          })
        .then(res => res.json())
        .then(setCompanyAnalysis)
    }
    return (
        <CompanyContext.Provider value={{
            companies,companyAnalysis, getCompanies,getCompanyAnalysis
        }}>
            {props.children}
        </CompanyContext.Provider>
    )
}