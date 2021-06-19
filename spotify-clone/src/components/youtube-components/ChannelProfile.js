import React from "react"; 
import { useYoutubeDataLayerValue } from "../../contexts/YoutubeDataLayer";
import "./styles/ChannelProfile.css";


function ChannelProfile({}) {
  const [{channel}, youtubeDispatch] = useYoutubeDataLayerValue();

  return (
    <div className="channel">
      <h2>{channel?.snippet?.title}</h2>
      <img src={channel?.snippet?.thumbnails?.high?.url} className="profile__picture" />
      <h2>{channel?.statistics?.subscriberCount} Suscribers</h2>
      <p>{channel?.snippet?.description}</p>
    </div>
  );

}

export default ChannelProfile;