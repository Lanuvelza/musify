import React, { useEffect, useState } from "react";
import './App.css';
import Login from "./components/Login"
import { getTokenFromUrl } from "./components/spotify/spotify";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(); 

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = ""; 
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);
    }

    console.log("token", token);
  }, []);

  return (
  <div className="app">
    <Login />
  </div>
  );
}

export default App;
