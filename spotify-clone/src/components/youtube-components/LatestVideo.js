import React from 'react';
import { useYoutubeDataLayerValue } from '../../contexts/YoutubeDataLayer';
import "./styles/LatestVideo.css"; 

function LatestVideo({}) {
  const [{channel}, youtubeDispatch] = useYoutubeDataLayerValue();


  return (
    <div className="latestvideo__body">
      Latest Video
    </div>
  )
}

export default LatestVideo;