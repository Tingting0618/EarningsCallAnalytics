import React from "react";
import { Route, Routes } from "react-router-dom";
import { CompanyProvider } from "./company/CompanyProvider"
import { Home } from "./Home"
import {CompanyList} from "./company/CompanyList"


export const ApplicationViews = () => {
    return (
        <>
            <CompanyProvider>
                <Routes>
                    <Route path="/" element={<Home />}/>
                </Routes>


                <Routes>
                    <Route path="/company" element={<CompanyList />}/>
                </Routes>
            </CompanyProvider>
        </>)
};
