import React, { useEffect } from "react";
import './App.css';
import Login from "./components/Login"
import { getTokenFromUrl } from "./components/api/spotify/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./contexts/DataLayer";
import MainBody from "./components/main-components/MainBody";
import { authorizeInstagram } from "./components/api/instagram/instagram";

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useDataLayerValue(); 

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = ""; 
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });
    }

    authorizeInstagram();

  }, []);

  return (
  <div className="app">
    {token ? <MainBody spotify={spotify} /> : <Login />}
  </div>
  );
}

export default App;
