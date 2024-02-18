import { useEffect, useState } from "react";
import stlyes from "./Header.module.css";
import React from "react"

function Header( {handleToken} ) {
  const CLIENT_ID = "5fdfe130710b4a05945d4a847a0e4384";
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [token, setToken] = useState("");

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setToken(token);
    handleToken(token);

  }, [handleToken]);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  return (
    <>
      <div className={stlyes.container}>
        <h1>
          JA<span>MMM</span>ING
        </h1>
        {!token ? (
          <a
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
          >
            Login
          </a>
        ) : 
          <button className={stlyes.logoutButton} onClick={logout}>Logout</button> } 

      </div>
      
    </>
  );
}

export default Header;
