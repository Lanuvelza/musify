import React from 'react';
import TimeAgo from 'react-timeago'
import Youtube from 'react-youtube';
import { useYoutubeDataLayerValue } from '../../contexts/YoutubeDataLayer';
import { replaceWithQuotations } from '../api/youtube/youtube';
import "./styles/Video.css"; 

function Video() {
  const [{video, videos, youtube__playing}, youtubeDispatch] = useYoutubeDataLayerValue();

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
      'origin': 'http://localhost:3000'
    }
  }


  return (
    <div className="latestvideo__body">
      <div className="video__header">
        <h2>{video?.contentDetails?.videoId === videos[0]?.contentDetails.videoId ? "Latest Video" : null}</h2>
        <h1>{replaceWithQuotations(video?.snippet?.title)}</h1>
        <p>
          <TimeAgo date={video?.snippet?.publishedAt} />
        </p>
      </div>
      <Youtube 
        videoId={video?.contentDetails?.videoId || video?.id?.videoId}
        className={youtube__playing ? "video__player__playing" : "video__player"}
        opts={opts}
        onReady={playerOnReady}
        onPlay={playerOnPlay}
        onStateChange={playerOnStateChange}
      />
      <div className="video__description">
        <h2>Channel: {video?.snippet?.channelTitle}</h2>
        <p>{video?.snippet?.description}</p>
      </div>
    </div>
  )
}

export default Video;