import React from "react"
import { SearchBar } from "./header/Header"
import { Analysis1 } from "./analyses/Analysis1"
import { Analysis2 } from "./analyses/Analysis2"
import { CompanyProvider } from "./company/CompanyProvider"
import "./EarningsCall.css"
import { CompanyList } from "./company/CompanyList"

export const EarningsCall = () => (
    <>
        <CompanyProvider>
            <h2>Earnings Call Text Analytics Platform</h2>
            <SearchBar />

            <h2>Analysis</h2>
            <article className="analyses">
                <Analysis1 />
                <Analysis2 />
            </article>
        </CompanyProvider>
    </>

)