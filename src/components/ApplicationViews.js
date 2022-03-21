import React from "react";
import { Route, Routes } from "react-router-dom";
import { CompanyProvider } from "./company/CompanyProvider"
import { Home } from "./Home"
import { CompanyList } from "./company/CompanyList"
import { CompanyForm } from "./company/CompanyForm";
import { Profile } from "./auth/Profile";
import { ProfileProvider } from "./auth/ProfileProvider";

export const ApplicationViews = () => {
    return (
        <>
            <CompanyProvider>
                <ProfileProvider>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>

                    <Routes>
                        <Route path="/companymgmt" element={<CompanyList />} />
                    </Routes>

                    <Routes>
                        <Route path="/companies/new" element={<CompanyForm />} />
                    </Routes>

                    <Routes>
                        <Route path="/companies/:companyId/edit" element={<CompanyForm />} />
                    </Routes>
                    <Routes >
                        <Route path="/profile" element={<Profile />} />
                    </Routes>
                </ProfileProvider>
            </CompanyProvider>
        </>)
};
