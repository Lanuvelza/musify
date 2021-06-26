import React from 'react';
import ChannelProfile from './ChannelProfile';
import ChannelVideos from './ChannelVideos';
import Video from './Video';
import OtherUploads from './OtherUploads';
import "./styles/YoutubeBody.css"; 
import { useYoutubeDataLayerValue } from '../../contexts/YoutubeDataLayer';

function YoutubeBody() {
  const [{channel}, youtubeDispatch] = useYoutubeDataLayerValue();

  if (!channel) {
    return null;
  } 

  return (
    <div className="main">
      <div className="main__top">
        <ChannelProfile />
        <Video />
      </div>
      <div className="videos__body">
        <ChannelVideos />
        <OtherUploads />
      </div>
    </div>
  )
}

export default YoutubeBody;