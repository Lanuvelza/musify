import { Avatar } from '@material-ui/core';
import React from 'react';
import { useInstagramDataLayerValue } from '../../contexts/InstagramDataLayer';
import "./styles/InstagramProfile.css"; 


function InstagramProfile() {
  const [{instagram__user}, instagramDispatch] = useInstagramDataLayerValue();

  return (
    <div className="instagram__profile">
      <div className="instagram__profile__header">
        <h2>{instagram__user?.full_name}</h2>
      </div>
      <img 
        src={`https://workers.iantyylam.workers.dev/${instagram__user?.profile_pic_url_hd}`} 
        alt={instagram__user?.full_name}
        className={"instagram__profile__picture"}
      />
      <div className="instagram__profile__bio">
        <p>{instagram__user?.biography}</p>
      </div>
    </div>
  )
}

export default InstagramProfile;