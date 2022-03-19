import React from "react"
import { Route, Navigate, BrowserRouter, Routes } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./header/NavBar"
import "./EarningsCall.css"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"

const AuthCheck = ({ children }) => {
    if (localStorage.getItem("lu_token")) {
        return children
    }
    else return <Navigate to="/login" />
}

export const EarningsCall = () => (
    <>
        <BrowserRouter>
            <Routes>

                <Route path="*" element={<AuthCheck><NavBar /><ApplicationViews /></AuthCheck>} />

                <Route path="/login" element={<Login />} />

                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>

    </>
)
