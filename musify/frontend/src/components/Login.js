import React from "react";
import "./styles/Login.css";
import {loginUrl} from "./api/spotify/spotify";

function Login() {
  return (
  <div className="login">
    <div className="loginCard">
      <div className="loginCard__logo">
        <h1>musify.</h1>
      </div>
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  </div>
  );
}

export default Login;
