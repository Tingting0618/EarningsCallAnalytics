import React from "react"
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router'
import "./NavBar.css"


export const NavBar = () => {
    const navigate = useNavigate()
    return (
        <div className="nav">
            <ul className="navbar">
                <li className="navbar__item">
                    <Link className="nav-link" to="/">HomePage</Link>
                </li>

                <li className="navbar__item">
                    <Link className="nav-link" to="/company">Company Management</Link>
                </li>
                {
                    (localStorage.getItem("lu_token") !== null) ?
                        <li className="navbar__item">
                            <button className="nav-link fakeLink"
                                onClick={() => {
                                    localStorage.removeItem("lu_token")
                                    navigate({ pathname: "/login" })
                                }}
                            >Logout</button>
                        </li> :
                        <>
                            <li className="navbar__item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                            <li className="navbar__item">
                                <Link className="nav-link" to="/register">Register</Link>
                            </li>
                        </>
                }        </ul>
        </div>
    )
}