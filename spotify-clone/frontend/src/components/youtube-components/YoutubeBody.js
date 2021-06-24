import React from 'react';
import ChannelProfile from './ChannelProfile';
import ChannelVideos from './ChannelVideos';
import LatestVideo from './LatestVideo';
import OtherUploads from './OtherUploads';
import "./styles/YoutubeBody.css"; 

function YoutubeBody() {

  return (
    <div className="main">
      <div className="main__top">
        <ChannelProfile />
        <LatestVideo />
      </div>
      <div className="videos__body">
        <ChannelVideos />
        <OtherUploads />
      </div>
    </div>
  )
}

export default YoutubeBody;