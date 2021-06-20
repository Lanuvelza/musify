import React from 'react';
import "./styles/ChannelVideoItem.css";


function ChannelVideoItem({video}) {

  return (
  <div className="videoitem__body">
    <img src={video?.snippet?.thumbnails?.high?.url} alt={video?.snippet?.titel} />
    <h3>{video?.snippet?.title}</h3>
  </div>
  )
}

export default ChannelVideoItem;