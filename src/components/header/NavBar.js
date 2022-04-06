import React from "react";
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router'
import "./NavBar.css"


export const NavBar = () => {

    const navigate = useNavigate()
    return (
        <>
            <h2>Earnings Call Text Analytics Platform</h2>
            <div className="nav">
                <div className="navbar">

                    <li className="navbar__item">
                        <Link className="button-13" to="/">Dashboard</Link>
                    </li>

                    {
                        (localStorage.getItem("lu_token") !== null) ?
                            <>
                                <li className="navbar__item">
                                    <Link className="button-13" to="/companymgmt">Company</Link>
                                </li>
                                <li className="navbar__item">
                                    <Link className="button-13" to="/profile">Profile</Link>
                                </li>

                                <li className="navbar__item">
                                    <button className="button-13"
                                        onClick={() => {
                                            localStorage.removeItem("lu_token")
                                            navigate({ pathname: "/" })
                                        }}
                                    >Logout</button>
                                </li>
                            </> :
                            <>
                                <li className="navbar__item">
                                    <Link  className="button-13" to="/login">Login</Link>
                                </li>
                                <li className="navbar__item">
                                    <Link  className="button-13" to="/register">Register</Link>
                                </li>
                            </>
                    }

                </div>
            </div>
        </>
    )
}