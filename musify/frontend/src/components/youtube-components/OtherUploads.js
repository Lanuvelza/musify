import React, { useEffect } from 'react';
import { useYoutubeDataLayerValue } from '../../contexts/YoutubeDataLayer';
import VideoItem from './VideoItem';
import "./styles/OtherUploads.css"; 

function OtherUploads() {
  const [{channel, query_videos, keyword}, youtubeDispatch] = useYoutubeDataLayerValue();

  const resetScroll = () => {
    const element = document.getElementsByClassName("othervideo__library");
    
    if (element) {
      element[0].scrollLeft = 0;
    }
  }

  // resets the scroll back to the start every time the channel changes
  useEffect(() => {
    resetScroll();
  }, [channel]);


  return (
    <div className="othervideo__body">
      <div className="othervideo__header"> 
        <h2>Uploads of {keyword}</h2>
      </div>
      <div className="othervideo__library">
        {query_videos?.map((video) => (
          <VideoItem video={video} />
        ))}
      </div>
    </div>
  )
}

export default OtherUploads;