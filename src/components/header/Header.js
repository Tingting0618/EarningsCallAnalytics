import React, { useContext, useEffect } from "react"
import { CompanyContext } from "../CompanyProvider";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

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
                        Name: {company.label}
                    </>
                    )
                })
            }
        </section>
    )
}

const stockOptions = [
    { value: 'WH', label: 'Wyndham' },
    { value: 'HLT', label: 'Hilton Worldwide' },
    { value: 'CHH', label: 'Choice Hotels' },
    { value: 'H', label: 'Hyatt' },
    { value: 'ABNB', label: 'Airbnb' },
    { value: 'EXPE', label: 'Expedia' },
    { value: 'TRIP', label: 'Tripadvisor' },
    { value: 'MAR', label: 'Marriott International' },
    { value: 'IHG', label: 'InterContinental Hotels' }
]
export const AnimatedMulti = () => {

    return (<Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        defaultValue={[stockOptions[4], stockOptions[6], stockOptions[8]]}
        isMulti
        options={stockOptions}
    />)
}