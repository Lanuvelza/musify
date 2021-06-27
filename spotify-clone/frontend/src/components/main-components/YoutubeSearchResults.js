import React from 'react';
import { Avatar, makeStyles } from "@material-ui/core";
import "./styles/YoutubeSearchResults.css";
import { useYoutubeDataLayerValue } from '../../contexts/YoutubeDataLayer';
import { filterVideosOnly, getChannelVideos, searchVideosByQuery } from '../youtube/youtube';

const useStyles = makeStyles({
  avatar: {
    height: '200px',
    width: '200px',
    boxShadow: '5px 8px 15px black',
  }
})


function YoutubeSearchResults({channel}) {
  const [{query}, youtubeDispatch] = useYoutubeDataLayerValue();

  const classes = useStyles(); 

  const selectChannel = () => {
    console.log(channel);
    youtubeDispatch({
      type: "SET_CHANNEL",
      channel: channel
    })
    
    getChannelVideos(channel)
    .then(response => {

      const videos = response;
      const latestVideo = videos[0]; 
      console.log(response);
      youtubeDispatch({
        type: "SET_VIDEOS",
        videos: videos
      })

      
      youtubeDispatch({
        type: "SET_VIDEO", 
        video: latestVideo
      })
    })

    searchVideosByQuery(query)
    .then((results) => {
      const videos = filterVideosOnly(results.data.items);

      youtubeDispatch({
        type: "SET_QUERY_VIDEOS", 
        query_videos: videos
      })
    
      youtubeDispatch({
        type: "SET_KEYWORD",
        keyword: query
      })
    })
  }


  return (
    <div key={channel.id} className="results__channelBody">
      <div className="results__channelAvatar">
      <Avatar 
        src={channel.snippet.thumbnails.high.url}
        alt={channel.snippet.channelTitle}
        className={classes.avatar}
        onClick={selectChannel}
      />
      </div>
      <div className="results__channelTitle">
        <p>{channel.snippet.title}</p>

      </div>

    </div>
  )
}

export default YoutubeSearchResults;