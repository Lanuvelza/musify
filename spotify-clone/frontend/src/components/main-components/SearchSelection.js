import { Avatar, Button, makeStyles } from '@material-ui/core';
import React from 'react';
import { useDataLayerValue } from '../../contexts/DataLayer';
import { useInstagramDataLayerValue } from '../../contexts/InstagramDataLayer';
import { useYoutubeDataLayerValue } from '../../contexts/YoutubeDataLayer';
import "./styles/SearchSelection.css"; 
import SaveIcon from "@material-ui/icons/Save";

const useStyles = makeStyles({
  profile_picture: {
    margin: '15px',
    height: '50px',
    width: '50px',
  },
  button: {
    // backgroundColor: 'rgb(5, 4, 4)',
    color: 'lightsteelblue',
    borderColor: 'lightsteelblue',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    boxShadow: '5px 10px 18px black',
    width: '120px',
    height: '50px',
    '&:hover': {
      color: 'pink',
      borderColor: 'pink',
    }
  }
})


function SearchSelection() {
  const [{artist, searching}, dispatch] = useDataLayerValue(); 
  const [{channel}, youtubeDispatch] = useYoutubeDataLayerValue();
  const [{instagram__user}, instagramDispatch] = useInstagramDataLayerValue();

  const classes = useStyles();

  const save = () => {
    dispatch({
      type: "SET_SEARCHING",
      searching: false
    })
  }
  
  return (
    <div className="selection__body">
      <h4>Currently Selected:</h4>
      <div className="selected__tab">
        <h6>Spotify Artist:</h6>
        {artist ? 
        <>
          <div className="selected__tabInfo">
            <Avatar
              src={artist?.images[0]?.url}
              alt={artist?.name}
              className={classes.profile_picture}
            /> 
            <p>{artist?.name}</p>
          </div>
        </> :
        <p>No artist selected currently</p>}
      </div>
      <div className="selected__tab">
        <h6>Youtube Channel:</h6>
        {channel ? 
        <>
          <div className="selected__tabInfo">
            <Avatar
              src={channel?.snippet?.thumbnails?.high?.url}
              alt={channel?.snippet?.channelTitle}
              className={classes.profile_picture}
            />
            <p>{channel?.snippet?.title}</p>
          </div>
        </> :
        <p>No channel selected currently</p>}
      </div>
      <div className="selected__tab">
        <h6>Instagram User:</h6>
        {instagram__user ? 
        <>
          <div className="selected__tabInfo">
            <Avatar 
              src={`https://workers.iantyylam.workers.dev/${instagram__user?.profile_pic_url}`}
              alt={instagram__user?.username}
              className={classes.profile_picture}
            /> 
            <div className="instagram__userInfo">
              <p>{instagram__user?.username}</p>
              <p>{instagram__user?.full_name}</p>
            </div>
          </div>
        </> : 
        <p>No Instagram selected currently</p>}
      </div>

      <Button 
        variant="outlined"
        startIcon={<SaveIcon />}
        className={classes.button}
        onClick={save}
      >Save</Button>
      
    </div>
  )

}

export default SearchSelection;