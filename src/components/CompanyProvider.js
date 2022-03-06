import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const CompanyContext = createContext()

// This component establishes what data can be used.
export const CompanyProvider = (props) => {
    const [companies, setCompanies] = useState([])

    const getCompanies = () => {
        return fetch("http://localhost:8088/companies")
        .then(res => res.json())
        .then(setCompanies)
    }

    return (
        <CompanyContext.Provider value={{
            companies, getCompanies
        }}>
            {props.children}
        </CompanyContext.Provider>
    )
}