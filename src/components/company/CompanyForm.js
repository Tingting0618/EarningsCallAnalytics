import React, { useContext, useState, useEffect } from "react";
import { CompanyContext } from "./CompanyProvider.js";
import { useNavigate, useParams } from "react-router-dom";

export const CompanyForm = () => {
    const { companyId } = useParams();
    const navigate = useNavigate();
    const {companyTypes,getCompanyById,updateCompany, getCompanyTypes, createCompany } = useContext(CompanyContext);

    const [currentCompany, setCurrentCompany] = useState({
        value: "",
        label: "",
        companyTypeId: 1,
        year: 2022,
        quarter: 1,
        transcript: ""
    });
    useEffect(() => {
        getCompanyTypes().then(() => {
            if (companyId) {
                getCompanyById(companyId)
                    .then(company => {
                        setCurrentCompany({
                            id: companyId,
                            value: company.value,
                            label: company.label,
                            year: company.year,
                            quarter: company.quarter,
                            transcript: company.transcript,
                            companyTypeId: company.company_type
                        })
                    })
            } else {
            }
        })
    }, [])

    const changeCompanyLabelState = (event) => {
        const newCompanyState = { ...currentCompany };
        newCompanyState.label = event.target.value;
        setCurrentCompany(newCompanyState);
    };

    const changeCompanyValueState = (event) => {
        const newCompanyState = { ...currentCompany };
        newCompanyState.value = event.target.value;
        setCurrentCompany(newCompanyState);
    };

    const changeCompanyTranscriptState = (event) => {
        const newCompanyState = { ...currentCompany };
        newCompanyState.transcript = event.target.value;
        setCurrentCompany(newCompanyState);
    };

    const changeYearState = (event) => {
        const newCompanyState = { ...currentCompany };
        newCompanyState.year = event.target.value;
        setCurrentCompany(newCompanyState);
    };

    const changeQuarterState = (event) => {
        const newCompanyState = { ...currentCompany };
        newCompanyState.quarter = event.target.value;
        setCurrentCompany(newCompanyState);
    };

    const changeCompanyTypeState = (event) => {
        const newCompanyState = { ...currentCompany };
        newCompanyState.companyTypeId = event.target.value;
        setCurrentCompany(newCompanyState);
    };

    return (
        <form className="companyForm">
            <h2 className="companyForm__label">Add A New Company</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="value">Stock Symbol: </label>
                    <input
                        type="text"
                        name="value"
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Stock Symbol here"
                        value={currentCompany.value}
                        onChange={changeCompanyValueState}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="label">Company Name: </label>
                    <input
                        type="text"
                        name="label"
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Company name here"
                        value={currentCompany.label}
                        onChange={changeCompanyLabelState}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="transcript">Transcript: </label>
                    <textarea
                        type="text"
                        name="transcript"
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Paste transcript here"
                        value={currentCompany.transcript}
                        onChange={changeCompanyTranscriptState}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="year">Year: </label>
                    <input
                        type="number"
                        name="year"
                        required
                        autoFocus
                        className="form-control"
                        value={currentCompany.year}
                        onChange={changeYearState}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="level">Quarter: </label>
                    <select
                        name="level"
                        required
                        autoFocus
                        className="form-control"
                        value={currentCompany.quarter}
                        onChange={changeQuarterState}
                    >
                        <option value="0">Select a quarter...</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="3">4</option>
                    </select>
                </div>


                <div className="form-group">
                    <label htmlFor="type">Company Type: </label>
                    <select
                        name="type"
                        required
                        autoFocus
                        className="form-control"
                        value={currentCompany.companyTypeId}
                        onChange={changeCompanyTypeState}
                    >
                        <option value="0">Select a company type...</option>
                        {companyTypes.map((companyType) => (
                            <option value={companyType.id}>{companyType.label}</option>
                        ))}
                    </select>
                </div>

            </fieldset>

            <button
                type="submit"
                onClick={(evt) => {
                    // Prevent form from being submitted
                    evt.preventDefault();

                    const company = {
                        label: currentCompany.label,
                        value: currentCompany.value,
                        transcript: currentCompany.transcript,
                        year: parseInt(currentCompany.year),
                        quarter: parseInt(currentCompany.quarter),
                        companyTypeId: parseInt(currentCompany.companyTypeId),
                        id: parseInt(currentCompany.id)
                    };
                    { companyId ? updateCompany(company).then(() => navigate("/companymgmt")) : createCompany(company).then(() =>navigate("/companymgmt")) }
                    // Send POST request to your API
                    // createCompany(company).then(() => navigate("/companys"));
                }}
                className="btn btn-primary"
            >
                {companyId ? <>Save Company</> : <>Create Company</>}
            </button>
        </form >
    );
};