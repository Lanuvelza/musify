import { Avatar, makeStyles } from "@material-ui/core";
import { PlayCircleFilled } from "@material-ui/icons";
import React from "react";
import { useDataLayerValue } from "../../contexts/DataLayer";
import { useInstagramDataLayerValue } from "../../contexts/InstagramDataLayer";
import { useViewDataLayerValue } from "../../contexts/ViewDataLayer";
import { useYoutubeDataLayerValue } from "../../contexts/YoutubeDataLayer";
import "./styles/Home.css";
import SongRowHome from "./SongRowHome";
import TimeAgo from 'react-timeago';
import Youtube from "react-youtube";
import { replaceWithQuotations } from "../youtube/youtube";

const useStyles = makeStyles({
  spotify_avatar: {
    height: '200px',
    width: '200px',
    margin: '20px',
    borderStyle: 'solid', 
    borderColor: 'white',
    borderWidth: '5px',
    '&:hover': {
      cursor: 'pointer',
    }
  },
  youtube_avatar: {
    height: '100px',
    width: '100px',
    marginRight: '20px',
    borderStyle: 'solid', 
    borderColor: 'white',
    borderWidth: '5px',
    '&:hover': {
      cursor: 'pointer',
    }
  },
  instagram_avatar: {
    height: '100px',
    width: '100px',
    marginRight: '20px',
    borderStyle: 'solid', 
    borderColor: 'white',
    borderWidth: '5px',
    '&:hover': {
      cursor: 'pointer',
    }
  }


})

function Home() {
  const [{artist, latest_album, latest_album_tracks}, dispatch] = useDataLayerValue(); 
  const [{channel, latest_video, youtube__playing}, youtubeDispatch] = useYoutubeDataLayerValue();
  const [{instagram__user, latest_post}, instagramDispatch] = useInstagramDataLayerValue();
  const [{}, viewDispatch] = useViewDataLayerValue();

  const classes = useStyles();

  const opts = {
    height: '390',
    width: '740',
  }


  const selectSpotify = () => {
    viewDispatch({
      type: "SET_VIEW",
      view: "SPOTIFY"
    })
  }

  const playAlbum = () => {
    dispatch({
      type: "SET_URI", 
      uri: latest_album?.uri
    })
  }

  const selectYoutube = () => {
    viewDispatch({
      type: "SET_VIEW", 
      view: "YOUTUBE"
    })
  }

  const playerOnReady = (event) => {
    event.target.pauseVideo();

    youtubeDispatch({
      type: "SET_YOUTUBE_PLAYING",
      youtube__playing: false
    })
  }

  const playerOnPlay = (event) => {

    youtubeDispatch({
      type: "SET_YOUTUBE_PLAYING",
      youtube__playing: true
    })
  }

  const selectInstagram = () => {
    viewDispatch({
      type: "SET_VIEW", 
      view: "INSTAGRAM"
    })
  }

  const formatTimestamp = (time) => {
    if (!time) {
      return;
    }
    const date = new Date(time * 1000);
    const timestamp = date.toISOString(); 
    return timestamp;
  }

  if (!artist && !channel && !instagram__user) {
    return (
      <div className="defaultHome"><h1>Find out what your favourite artist is up to...</h1></div>
    )
  }


  return (
  <div className="homeBody">

    {artist && 
    <div className="home__left">
      <div className="left__header">
        <Avatar 
          src={artist?.images[0]?.url} 
          alt={artist?.name} 
          className={classes.spotify_avatar}
          onClick={selectSpotify}
        />
        <div className="left__header__title">
         <h2>{artist?.name}</h2>
         <p>{artist?.followers.total} Followers</p>
        </div>
      </div>
      <hr />
      <div className="left__body">
        <div className="left__body__header">
          <img 
            src={latest_album?.images[0]?.url}
            alt={latest_album?.name}
            className={"left__album"}
          />
        <div className="album__title">
          <h2><strong>Latest Release</strong></h2>
          <h3>{latest_album?.name}</h3>
          <PlayCircleFilled className={"play__button"} onClick={playAlbum} />
        </div>
        </div>
      </div>
      <div className="song__body">
        {latest_album_tracks && latest_album_tracks.map((track) => (
          <SongRowHome track={track} key={track.id} />
        ))}
      </div>
    </div>}

    <div className="home__right">

      {channel && 
        <div className="home__right__top">
          <div className="right__header">
            <div className="right__header__title__left">
              <Avatar
                src={channel?.snippet?.thumbnails?.high?.url}
                alt={channel?.snippet?.title}
                className={classes.youtube_avatar}
                onClick={selectYoutube}
              />
              <div className="right__header__title">
                <h2>{channel?.snippet?.title}</h2>
                <p>{channel?.statistics?.subscriberCount} Subscribers</p>
              </div> 
            </div>
            <div className="right__header__title__right">
              <h3>Latest Upload by {channel?.snippet?.title}</h3>
            </div>
          </div>
          <div className="right__header__body">
            <Youtube
              videoId={latest_video?.contentDetails?.videoId}
              className={youtube__playing ? "youtube__player__playing" : "youtube__player" }
              opts={opts}
              onReady={playerOnReady}
              onPlay={playerOnPlay}
            /> 
            <h2>{replaceWithQuotations(latest_video?.snippet?.title)}</h2>
            <p><TimeAgo date={latest_video?.snippet?.publishedAt} /></p>
            <div className="youtube__description">
              <p>{latest_video?.snippet?.description}</p>
            </div>
          </div>
        </div>}

      {instagram__user && 
      <div className="home__right__bottom">
        <div className="instagram__header">
          <Avatar
            src={`https://workers.iantyylam.workers.dev/${instagram__user?.profile_pic_url_hd}`}
            alt={instagram__user?.full_name}
            className={classes.instagram_avatar}
            onClick={selectInstagram}
          />
          <div className="instagram__title">
            <h2>{instagram__user?.full_name}</h2>
            <p>{instagram__user?.edge_followed_by.count} Followers</p>
          </div>
        </div>
        <div className="post__body"> 
          <div className="post__body__left">
            <p>Last post from <TimeAgo date={formatTimestamp(latest_post?.node?.taken_at_timestamp)} />.</p>
            <p>{latest_post?.node?.edge_media_to_caption?.edges?.[0]?.node?.text}</p>
          </div>
          <img
            src={`https://workers.iantyylam.workers.dev/${latest_post?.node?.display_url}`}
            alt={latest_post?.node?.shortcode}
            className={"instagram__photo"}
          />
        </div>

      </div>}

    </div>

  </div>
 );
}

export default Home;