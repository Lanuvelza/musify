import React from "react"; 
import { useYoutubeDataLayerValue } from "../../contexts/YoutubeDataLayer";
import "./styles/ChannelProfile.css";


function ChannelProfile() {
  const [{channel}] = useYoutubeDataLayerValue();

  return (
    <div className="channel">
      <h2>{channel?.snippet?.title}</h2>
      <img 
        src={channel?.snippet?.thumbnails?.high?.url} 
        alt={channel?.snippet?.title}
        className="profile__picture" />
      <h2>{channel?.statistics?.subscriberCount} Suscribers</h2>
      {channel?.snippet?.description !== "" ? 
      <div className="profile__description">
        <p>{channel?.snippet?.description}</p>
      </div> : null }
    </div>
  );

}

export default ChannelProfile;