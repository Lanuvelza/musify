import React from 'react';
import ChannelProfile from './ChannelProfile';
import ChannelVideos from './ChannelVideos';
import LatestVideo from './LatestVideo';
import "./styles/YoutubeBody.css"; 

function YoutubeBody() {

  return (
    <div className="main">
      <ChannelProfile />
      <div className="videos__body">
        <LatestVideo />
        <ChannelVideos />
      </div>
      
    </div>
  )
}

export default YoutubeBody;