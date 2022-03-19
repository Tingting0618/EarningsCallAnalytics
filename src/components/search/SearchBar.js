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

    const [currentSearch, setCurrentSearch] = useState([{ value: 'WH', label: 'Wyndham' }, { value: 'ABNB', label: 'Airbnb' }]);
    const [currentYear, setCurrentYear] = useState({
        start: 2018,
        end: 2022
    });
    const [currentQuar, setCurrentQuar] = useState([
        { value: 1, label: 'Q1' },
        { value: 2, label: 'Q2' },
        { value: 3, label: 'Q3' },
        { value: 4, label: 'Q4' }]);

    const [currentKeywords, setCurrentKeywords] = useState({value:'Hello'});

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
    const handleQuarChange = (selectedOptions) => {
        setCurrentQuar(selectedOptions);
    }
    const handleKeywordsChange = (domKeywords) => {
        const newKeywordsState = { ...currentKeywords };
        newKeywordsState.value = domKeywords.target.value;
        setCurrentKeywords(newKeywordsState);
    }

    return (
        <>
        
            <header>
                <h3>Search Stock Here</h3>
                <Select
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    defaultValue={[{ value: 'WH', label: 'Wyndham' }, { value: 'ABNB', label: 'Airbnb' }]}
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

                <div>
                    <label >Choose a quarter:</label>
                    <Select
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        defaultValue={[
                            { value: 1, label: 'Q1' },
                            { value: 2, label: 'Q2' },
                            { value: 3, label: 'Q3' },
                            { value: 4, label: 'Q4' }]}
                        isMulti
                        options={[
                            { value: 1, label: 'Q1' },
                            { value: 2, label: 'Q2' },
                            { value: 3, label: 'Q3' },
                            { value: 4, label: 'Q4' }]}
                        onChange={handleQuarChange}
                    />
                </div>
                <label for="keywords">Keywords</label>
                <input type="text" id="keywords" name="keywords"
                    value={currentKeywords.value}
                    onChange={handleKeywordsChange} />
                <div>

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
                        '&end_year=' + currentYear.end +
                        '&quarter=' + currentQuar.map(
                            quarter => quarter.value) +
                        '&keywords=' + currentKeywords.value
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