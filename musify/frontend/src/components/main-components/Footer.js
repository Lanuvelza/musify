import React, { useEffect } from "react";
import "./styles/Footer.css"
import SpotifyPlayer from 'react-spotify-web-playback/lib';
import { useDataLayerValue } from "../../contexts/DataLayer";

function Footer() {
  const [{token, playing, uri}, dispatch] = useDataLayerValue();

  useEffect(() => {
    dispatch({
      type: "SET_PLAYING",
      playing: true
    })
  }, [uri])

  if (!token) {
    return null; 
  }

  return ( 
    <div className="footer">    
      <SpotifyPlayer 
        token={token}
        callback={state => {
          if (!state.isPlaying) {
            dispatch({
              type: "SET_PLAYING",
              playing: false
            })
          }
          if (state.track) {
            dispatch({
              type: "SET_CURRENT_TRACK",
              current_track: state.track
            });
          }
        }}
        play={playing}
        uris={uri ? [uri] : []} 
        styles={{
          height: '85px',
          bgColor: '#282828',
          color: '#1ed15e',
          sliderColor: '#1ed15e',
          sliderHandleColor: '#282828',
          trackNameColor: 'white',
          trackArtistColor: 'white',
          errorColor: 'white',
        }}
      />
    </div>
  );
}

export default Footer; 