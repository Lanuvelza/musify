import React, { useEffect } from "react";
import "./styles/Footer.css"
import SpotifyPlayer from 'react-spotify-web-playback';
// import { 
//   PlayCircleOutline,
//   SkipPrevious,
//   SkipNext,
//   PlaylistPlay,
//   Shuffle,
//   Repeat,
//   VolumeDown,
// } from "@material-ui/icons";
// import { Grid, Slider } from "@material-ui/core";
import { useDataLayerValue } from "../../contexts/DataLayer";

function Footer() {
  const [{token, playing, uri}, dispatch] = useDataLayerValue();
  console.log(token);
  console.log(playing);
  console.log(uri);

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
    // <div className="footer">
    //   <div className="footer__left">
    //     <img 
    //       src="https://i.pinimg.com/originals/8d/c7/52/8dc752834195102e4cb630a53221255e.jpg"
    //       alt=""
    //       className="footer__albumLogo"
    //     />
    //     <div className="footer__songInfo">
    //       <h4>My fav song</h4>
    //       <p>Atharva</p>
    //     </div>
    //   </div>
    //   <div className="footer__center">
    //     <Shuffle className="footer__green" />
    //     <SkipPrevious className="footer_icon" />
    //     <PlayCircleOutline fontSize="large" className="footer__icon" />
    //     <SkipNext className="footer__icon" />
    //     <Repeat className="footer__green" />
    //   </div>
    //   <div className="footer__right">
    //     <Grid container spacing={2}>
    //       <Grid item> 
    //         <PlaylistPlay />
    //       </Grid>
    //       <Grid item> 
    //         <VolumeDown />
    //       </Grid>
    //       <Grid item xs> 
    //         <Slider />
    //       </Grid>
    //     </Grid>
    //   </div>
    // </div>
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