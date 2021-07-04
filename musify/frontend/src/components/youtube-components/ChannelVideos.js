import React, { useEffect } from 'react';
import { useYoutubeDataLayerValue } from '../../contexts/YoutubeDataLayer';
import VideoItem from './VideoItem';
import "./styles/ChannelVideos.css"; 

function ChannelVideos() {
  const [{channel, videos}, youtubeDispatch] = useYoutubeDataLayerValue();

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
          <VideoItem video={video} key={video.etag} />
        ))}
      </div>
    </div>
  )
}

export default ChannelVideos;