import React from "react"
import { AnimatedMulti, CompanyList } from "./header/Header"
import { Analysis1 } from "./analyses/Analysis1"
import { Analysis2 } from "./analyses/Analysis2"
import "./EarningsCall.css"

export const EarningsCall = () => (
    <>
        <h2>Earnings Call Text Analytics Platform</h2>
        
        <header>
        <small>Search Stock Symbol</small>
            {/* <CompanyList /> */}
            <AnimatedMulti />
        </header>

        <h2>Analysis</h2>
        <article className="analyses">
            <Analysis1 />
            <Analysis2 />
        </article>
    </>
)