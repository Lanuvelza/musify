import React, { useEffect } from "react";
import './App.css';
import Login from "./components/Login"
import { getTokenFromUrl } from "./components/spotify/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./contexts/DataLayer";
import Player from "./components/player/Player";
import { authorizeInstagram, searchInstagram } from "./components/instagram/instagram";

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
        // console.log(playlists);
        dispatch({
          type: "SET_PLAYLISTS",
          playlists
        });
      });
      spotify.getPlaylist("37i9dQZF1E34Ucml4HHx1w")
      .then((playlist) => {
        // console.log(playlist)
        dispatch({
          type: "SET_DISCOVER_WEEKLY", 
          discover_weekly: playlist, 
        });
      });
    }

    authorizeInstagram()
    .then(response => {
      console.log(response);
    });

  }, []);

  return (
  <div className="app">
    {token ? <Player spotify={spotify} /> : <Login />}
  </div>
  );
}

export default App;
