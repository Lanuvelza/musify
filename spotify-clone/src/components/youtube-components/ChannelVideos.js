import React from 'react';
import { useYoutubeDataLayerValue } from '../../contexts/YoutubeDataLayer';
import "./styles/ChannelVideos.css"; 

function ChannelVideos({}) {
  const [{channel}, youtubeDispatch] = useYoutubeDataLayerValue();


  return (
    <div className="channelvideo__body">
      Channel Videos
    </div>
  )
}

export default ChannelVideos;