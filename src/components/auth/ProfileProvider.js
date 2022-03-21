import React, { useState } from "react";

export const ProfileContext = React.createContext();

export const ProfileProvider = (props) => {

  const [profile, setProfile] = useState({  companies: [] });

  const getProfile = () => {
    return fetch("http://localhost:8000/profile", {
      headers: {
        // Authorization: `Token fa2eba9be8282d595c997ee5cd49f2ed31f65bed`,
        Authorization: `Token ${localStorage.getItem("lu_token")}`,
      },
    })
      .then((response) => response.json())
      .then(setProfile);
  };

  return (
    <ProfileContext.Provider value={{ profile, getProfile }}>
      {props.children}
    </ProfileContext.Provider>
  );
};
