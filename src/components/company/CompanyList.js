import { CompanyContext } from "./CompanyProvider";
import React, { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { ProfileContext } from "../auth/ProfileProvider";


export const CompanyList = () => {
    const { companies, getCompanies, deleteCompany, followCompany, unfollowCompany } = useContext(CompanyContext)

    useEffect(() => {
        getCompanies()
    }, [])
    const navigate = useNavigate()

    const { profile, getProfile } = useContext(ProfileContext);

    useEffect(() => {
        getProfile();
    }, []);

    // debugger
    return (
        <article className="companies">
            <header className="companys__header">
                <h1>Companies</h1>
            </header>
            <div className="button--group">
                <span class="fa fa-star checked"></span>
                
                <button
                    className="btn btn-2 btn-sep icon-create"
                    onClick={() => {
                        navigate({ pathname: "/companies/new" });
                    }}
                >
                    Add A New Earnings Call Text to Analyze
                </button>
            </div>
            {companies.map((company) => {
                return (
                    <section key={`company--${company.id}`} className="company">

                        <div className="company__title">
                            {company.value}: {company.label}
                        </div>


                        <div className="company__follow">
                            <button className='btn btn-2'
                                onClick={() => {
                                    followCompany(company.id)
                                }}
                            >Follow</button>
                        </div>
                        <div className="company__unfollow">
                            <button className='btn btn-2'
                                onClick={() => {
                                    unfollowCompany(company.id)
                                }}
                            >UnFollow</button>
                        </div>

                        {profile.appuser && (profile.appuser.user.is_staff === true) ?
                            <>

                                <div className="company__edit">
                                    <button className='btn btn-2'
                                        onClick={() => {
                                            navigate(`/companies/${company.id}/edit`)
                                        }}
                                    >Edit</button>
                                </div>

                                <div className="company__delete">
                                    <button className='btn btn-2'
                                        onClick={() => {
                                            deleteCompany(company.id)
                                        }}
                                    >Delete</button>
                                </div>
                            </> :
                            <></>
                        }
                    </section>
                );
            })}
        </article>
    );
};