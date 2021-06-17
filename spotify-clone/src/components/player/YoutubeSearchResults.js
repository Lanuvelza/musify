import React from 'react';
import { Avatar, makeStyles } from "@material-ui/core";
import "./styles/YoutubeSearchResults.css";
import { useYoutubeDataLayerValue } from '../../contexts/YoutubeDataLayer';

const useStyles = makeStyles({
  avatar: {
    height: '200px',
    width: '200px',
    boxShadow: '5px 8px 15px black',
  }
})


function YoutubeSearchResults({channel}) {
  const [{}, youtubeDispatch] = useYoutubeDataLayerValue();

  const classes = useStyles(); 


  return (
    <div key={channel.id} className="results__channelBody">
      <div className="results__channelAvatar">
      <Avatar 
        src={channel.snippet.thumbnails.high.url}
        alt={channel.snippet.channelTitle}
        className={classes.avatar}
      />
      </div>
      <div className="results__channelTitle">
        <p>{channel.snippet.title}</p>

      </div>

    </div>
  )
}

export default YoutubeSearchResults;