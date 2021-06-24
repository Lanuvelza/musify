import React from 'react';
import { useYoutubeDataLayerValue } from '../../contexts/YoutubeDataLayer';
import { replaceWithQuotations } from '../youtube/youtube';
import "./styles/VideoItem.css";


function VideoItem({video}) {
  const [{}, youtubeDispatch] =useYoutubeDataLayerValue();

  const selectVideo = () => {
    youtubeDispatch({
      type: "SET_VIDEO",
      video: video
    })
  }

  return (
  <div className="videoitem__body">
    <img 
      src={video?.snippet?.thumbnails?.high?.url} 
      alt={video?.snippet?.title} 
      onClick={selectVideo}
    />
    <h3>{replaceWithQuotations(video?.snippet?.title)}</h3>
  </div>
  )
}

export default VideoItem;