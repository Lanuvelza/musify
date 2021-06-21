import React, { useEffect } from 'react';
import { useYoutubeDataLayerValue } from '../../contexts/YoutubeDataLayer';
import ChannelVideoItem from './ChannelVideoItem';
import "./styles/ChannelVideos.css"; 

function ChannelVideos() {
  const [{channel, videos, video}, youtubeDispatch] = useYoutubeDataLayerValue();

  const resetScroll = () => {
    const element = document.getElementsByClassName("channelvideo__library");
    
    if (element) {
      element[0].scrollLeft = 0;
    }
  }

  // resets the scroll back to the start every time the channel changes
  useEffect(() => {
    resetScroll();
  }, [channel]);


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