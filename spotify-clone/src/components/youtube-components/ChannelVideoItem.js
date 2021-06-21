import React from 'react';
import { useYoutubeDataLayerValue } from '../../contexts/YoutubeDataLayer';
import "./styles/ChannelVideoItem.css";


function ChannelVideoItem({video}) {
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
      alt={video?.snippet?.titel} 
      onClick={selectVideo}
    />
    <h3>{video?.snippet?.title}</h3>
  </div>
  )
}

export default ChannelVideoItem;