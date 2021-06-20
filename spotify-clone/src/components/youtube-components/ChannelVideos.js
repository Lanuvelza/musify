import React from 'react';
import { useYoutubeDataLayerValue } from '../../contexts/YoutubeDataLayer';
import ChannelVideoItem from './ChannelVideoItem';
import "./styles/ChannelVideos.css"; 

function ChannelVideos() {
  const [{channel, videos}, youtubeDispatch] = useYoutubeDataLayerValue();


  return (
    <div className="channelvideo__body">
      <div className="channelvideo__header"> 
        <h2>{channel?.snippet?.title}'s Uploads</h2>
      </div>
      <div className="channelvideo__library">
        {videos?.map((video) => (
          <ChannelVideoItem video={video} />
        ))}
      </div>
    </div>
  )
}

export default ChannelVideos;