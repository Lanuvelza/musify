import React from 'react';
import Youtube from 'react-youtube';
import { useYoutubeDataLayerValue } from '../../contexts/YoutubeDataLayer';
import "./styles/LatestVideo.css"; 

function LatestVideo() {
  const [{latest__video, youtube__playing}, youtubeDispatch] = useYoutubeDataLayerValue();

  const playerOnReady = (event) => {

    event.target.pauseVideo();
    youtubeDispatch({
      type: "SET_YOUTUBE_PLAYING",
      youtube__playing: false
    })
  }

  const playerOnPlay = (event) => {
    youtubeDispatch({
      type: "SET_YOUTUBE_PLAYING",
      youtube__playing: true
    })
  }

  const playerOnStateChange = (event) => {
    youtubeDispatch({
      type: "SET_YOUTUBE_PLAYING",
      youtube__playing: false
    })
  }

  const opts = {
    height: '590',
    width: '940',
    playerVars: {
    }
  }


  return (
    <div className="latestvideo__body">
      <div className="video__header">
        <h2>Latest Video</h2>
        <h1>{latest__video?.snippet?.title}</h1>
      </div>
      <Youtube 
        videoId={latest__video?.contentDetails.videoId}
        className={youtube__playing ? "video__player__playing" : "video__player"}
        opts={opts}
        onReady={playerOnReady}
        onPlay={playerOnPlay}
        onStateChange={playerOnStateChange}
      />
      <hr />
      <div className="video__description">
        <p>{latest__video?.snippet?.description}</p>
      </div>
    </div>
  )
}

export default LatestVideo;