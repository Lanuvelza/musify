import React, { useEffect } from "react";
import './App.css';
import Login from "./components/Login"
import { getTokenFromUrl } from "./components/spotify/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./contexts/DataLayer";
import Player from "./components/Player";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue(); 

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = ""; 
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      console.log("[token]", token); 
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });
      spotify.getUserPlaylists()
      .then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists
        });
      });
      spotify.getPlaylist("37i9dQZF1E34Ucml4HHx1w")
      .then((playlist) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY", 
          discover_weekly: playlist, 
        });
      });
    }
  }, []);

  return (
  <div className="app">
    {token ? <Player spotify={spotify} /> : <Login />}
  </div>
  );
}

export default App;
