import React, { useContext, useEffect, useState } from "react"
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { CompanyContext } from "../company/CompanyProvider";

const animatedComponents = makeAnimated();

export const SearchBar = () => {
    const { companies, getCompanies, getCompanyAnalysis } = useContext(CompanyContext)

    useEffect(() => {
        getCompanies()
    }, [])

    const stockOptions = companies.map(company =>
        ({ value: company.value, label: company.label }))

    const [currentSearch, setCurrentSearch] = useState([{value: 'WH', label: 'Wyndham'},{value: 'ABNB', label: 'Airbnb'}]);
    const [currentYear, setCurrentYear] = useState({
        start: 2018,
        end: 2022
    });

    const handleChange = (selectedOptions) => {
        setCurrentSearch(selectedOptions);
    }
    const handleYearChangeStart = (domYear) => {
        const newYearState = { ...currentYear };
        newYearState.start = domYear.target.value;
        setCurrentYear(newYearState);
    }
    const handleYearChangeEnd = (domYear) => {
        const newYearState = { ...currentYear };
        newYearState.end = domYear.target.value;
        setCurrentYear(newYearState);
    }
    return (
        <>
            <header>
                <h3>Search Stock Here</h3>
                <Select
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    defaultValue={[{value: 'WH', label: 'Wyndham'},{value: 'ABNB', label: 'Airbnb'}]}
                    isMulti
                    options={stockOptions}
                    onChange={handleChange}
                />
                
                <div>
                    <label for="year">Start Year</label>
                    <input type="number" id="year" name="year"
                        min="1990" max="2030"
                        value={currentYear.start}
                        onChange={handleYearChangeStart} />

                    <label for="year">End Year</label>
                    <input type="number" id="year" name="year"
                        min="1990" max="2030"
                        value={currentYear.end}
                        onChange={handleYearChangeEnd} />
                </div>
            </header>
            <button
                type="submit"
                onClick={(evt) => {
                    evt.preventDefault();
                    //building a querystring
                    const querystring = '?symbol=' + currentSearch.map(
                        company => company.value) + 
                        '&start_year=' + currentYear.start + 
                        '&end_year=' + currentYear.end
                    // Send GET request to your API
                    getCompanyAnalysis(querystring)
                }}
                className="btn btn-primary"
            >
                Submit
            </button>
        </>
    )
}