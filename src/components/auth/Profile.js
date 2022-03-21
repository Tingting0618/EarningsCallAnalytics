import React, { useEffect, useContext } from "react";
import { ProfileContext } from "./ProfileProvider.js";
// import "./Profile.css";

export const Profile = () => {

    const { profile, getProfile } = useContext(ProfileContext);

    useEffect(() => {
        getProfile();
    }, []);

    return (
        <article className="profile">
            <header>
                <h1>Your Profile</h1>
            </header>
            <section className="profile__info">
                <header className="profile__header">
                    <h3>Your Info</h3>
                </header>
                <div className="profile__name">
                    Welcome: {profile.appuser && profile.appuser.user.first_name}{" "}
                    {profile.appuser && profile.appuser.user.last_name}
                </div>
                <div className="profile__username">
                    Username: {profile.appuser && profile.appuser.user.username}
                </div>
                <div className="profile__bio">
                    About you: {profile.appuser && profile.appuser.bio}
                </div>
            </section>
            <section className="profile__registrations">
                <header className="registrations__header">
                    <h3>Companies you are following</h3>
                </header>
                <div className="registrations">
                    {profile.companies.map((company) => {
                        return (
                            <div key={company.value} className="registration">
                                <div className="registration__game">{company.label}</div> 
                                <div>Followers {company.followers.length}</div> 
                            </div>
                        );
                    })}
                </div>
            </section>
        </article>
    );
};