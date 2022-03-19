import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const CompanyContext = createContext()

// This component establishes what data can be used.
export const CompanyProvider = (props) => {
    const [companies, setCompanies] = useState([])
    const [companyTypes, setCompanyTypes] = useState([])
    const [companyAnalysis, setCompanyAnalysis] = useState([])

    const getCompanies = () => {
        return fetch("http://localhost:8000/companies", {
            headers: {
              Authorization: `Token fa2eba9be8282d595c997ee5cd49f2ed31f65bed`,
            },
          })
        .then(res => res.json())
        .then(setCompanies)
    }

    const getCompanyById = (companyId) => {
      return fetch(`http://localhost:8000/companies/${companyId}`, {
        headers: {
          Authorization: `Token ${localStorage.getItem("lu_token")}`,
        },
      })
        .then((response) => response.json())
    };

    const createCompany = (company) => {
      return fetch("http://localhost:8000/companies", {
        headers: {
          Authorization: `Token ${localStorage.getItem("lu_token")}`,
          "Content-Type": "application/json"
        },
        method: 'post',
        body: JSON.stringify(company)
      }).then(getCompanies);
    };

    const deleteCompany = (id) => {
      return fetch(`http://localhost:8000/companies/${id}`, {
        headers: {
          Authorization: `Token ${localStorage.getItem("lu_token")}`,
          "Content-Type": "application/json"
        },
        method: 'delete'
      }).then(getCompanies);
    };

    const updateCompany = company => {
      return fetch(`http://localhost:8000/companies/${company.id}`, {
        method: "PUT",
        headers: {
          Authorization: `Token ${localStorage.getItem("lu_token")}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(company)
      }).then(getCompanies);
    }
    const getCompanyTypes = () => {
      return fetch("http://localhost:8000/companytypes", {
        headers: {
          Authorization: `Token ${localStorage.getItem("lu_token")}`,
        },
      }).then((response) => response.json()).then(setCompanyTypes);
    };

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
            companies,companyTypes,companyAnalysis,deleteCompany,updateCompany,getCompanyById, getCompanies,getCompanyAnalysis,createCompany,getCompanyTypes
        }}>
            {props.children}
        </CompanyContext.Provider>
    )
}