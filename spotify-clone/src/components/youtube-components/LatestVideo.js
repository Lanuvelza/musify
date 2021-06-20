import React from 'react';
import Youtube from 'react-youtube';
import { useYoutubeDataLayerValue } from '../../contexts/YoutubeDataLayer';
import "./styles/LatestVideo.css"; 

function LatestVideo({}) {
  const [{channel, latest__video}, youtubeDispatch] = useYoutubeDataLayerValue();

  const playerOnReady = (event) => {

    event.target.pauseVideo();
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
        className="video__player"
        opts={opts}
        onReady={playerOnReady}
      />
      <hr />
      <div className="video__description">
        <p>{latest__video?.snippet?.description}</p>
      </div>
    </div>
  )
}

export default LatestVideo;