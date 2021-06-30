import React from 'react';
import { Avatar, makeStyles } from "@material-ui/core";
import "./styles/YoutubeSearchResults.css";
import { useYoutubeDataLayerValue } from '../../contexts/YoutubeDataLayer';
import { filterVideosOnly, getChannelVideos, searchVideosByQuery } from '../youtube/youtube';

const useStyles = makeStyles({
  avatar: {
    height: '120px',
    width: '120px',
    boxShadow: '5px 8px 15px black',
    margin: '2px'
  }
})


function YoutubeSearchResults({channelItem}) {
  const [{query, channel}, youtubeDispatch] = useYoutubeDataLayerValue();

  const classes = useStyles(); 

  const selectChannel = () => {
    console.log(channelItem);
    youtubeDispatch({
      type: "SET_CHANNEL",
      channel: channelItem
    })
    
    getChannelVideos(channelItem)
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

      youtubeDispatch({
        type: "SET_LATEST_VIDEO",
        latest_video: latestVideo
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
    <div 
      key={channelItem.id} 
      className={channelItem.id === channel?.id ? "results__channelBody__selected" : "results__channelBody"}
      onClick={selectChannel}
    >
      <div className="results__channelAvatar">
      <Avatar 
        src={channelItem.snippet.thumbnails.high.url}
        alt={channelItem.snippet.channelTitle}
        className={classes.avatar}
      />
      </div>
      <div className="results__channelTitle">
        <p>{channelItem.snippet.title}</p>

      </div>

    </div>
  )
}

export default YoutubeSearchResults;