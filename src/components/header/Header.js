import React, { useContext, useEffect, useState } from "react"
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { CompanyContext } from "../company/CompanyProvider";

const animatedComponents = makeAnimated();

export const SearchBar = () => {
    const { companies, getCompanies, getCompanyAnalysis, companyAnalysis } = useContext(CompanyContext)

    useEffect(() => {
        getCompanies()
    }, [])

    const stockOptions = companies.map(company =>
        ({ value: company.value, label: company.label }))

    const [currentSearch, setCurrentSearch] = useState([]);

    const handleChange = (selectedOptions) => {
        setCurrentSearch(selectedOptions);
    }

    return (
        <>
            <header>
                <h3>Search Stock Here</h3>
                <Select
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    defaultValue={[stockOptions[0], stockOptions[1]]}
                    isMulti
                    options={stockOptions}
                    onChange={handleChange}
                />
            </header>
            <button
                type="submit"
                onClick={(evt) => {
                    evt.preventDefault();
                    //building a querystring
                    const querystring = '?symbol=' + currentSearch.map(
                        company =>company.value)
                    // Send GET request to your API
                    getCompanyAnalysis(querystring)
                    // .then(() => history.push("/"));
                }}
                className="btn btn-primary"
            >
                Submit
            </button>
        </>
    )
}