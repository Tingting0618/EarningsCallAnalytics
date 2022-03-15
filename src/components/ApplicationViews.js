import React from "react";
import { Route, Routes } from "react-router-dom";
import { CompanyProvider } from "./company/CompanyProvider"
import { Home } from "./Home"


export const ApplicationViews = () => {
    return (
        <>
            <CompanyProvider>
                <Routes>
                    <Route path="/" element={<Home />}/>
                </Routes>
            </CompanyProvider>
        </>)
};
