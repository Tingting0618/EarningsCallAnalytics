import React from "react";
import { Route, Routes } from "react-router-dom";
import { CompanyProvider } from "./company/CompanyProvider"
import { Home } from "./Home"
import {CompanyList} from "./company/CompanyList"
import { CompanyForm } from "./company/CompanyForm";


export const ApplicationViews = () => {
    return (
        <>
            <CompanyProvider>
                <Routes>
                    <Route path="/" element={<Home />}/>
                </Routes>


                <Routes>
                    <Route path="/companys" element={<CompanyList />}/>
                </Routes>

                <Routes>
                    <Route path="/companies/new" element={<CompanyForm />}/>
                </Routes>

                <Routes>
                    <Route path="/companies/:companyId/edit" element={<CompanyForm />}/>
                </Routes>

            </CompanyProvider>
        </>)
};
