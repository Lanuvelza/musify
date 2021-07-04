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
    return (
      <div className="youtube__default">
        <h2>No Youtube artist channel selected yet.</h2>
      </div>
    );
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