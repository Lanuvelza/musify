import React from 'react';
import TimeAgo from 'react-timeago'
import Youtube from 'react-youtube';
import { useYoutubeDataLayerValue } from '../../contexts/YoutubeDataLayer';
import { replaceWithQuotations } from '../youtube/youtube';
import "./styles/LatestVideo.css"; 

function LatestVideo() {
  const [{latest__video, video, youtube__playing}, youtubeDispatch] = useYoutubeDataLayerValue();

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
        <h2>{video?.contentDetails?.videoId === latest__video?.contentDetails.videoId ? "Latest Video" : null}</h2>
        <h1>{video ? replaceWithQuotations(video?.snippet?.title) : replaceWithQuotations(latest__video?.snippet?.title)}</h1>
        <p>
          {video ? <TimeAgo date={video?.snippet?.publishedAt} /> : <TimeAgo date={latest__video?.snippet?.publishedAt} /> }
        </p>
      </div>
      <Youtube 
        videoId={video ? (video?.contentDetails?.videoId || video?.id?.videoId) : latest__video?.contentDetails.videoId}
        className={youtube__playing ? "video__player__playing" : "video__player"}
        opts={opts}
        onReady={playerOnReady}
        onPlay={playerOnPlay}
        onStateChange={playerOnStateChange}
      />
    </div>
  )
}

export default LatestVideo;