import React from 'react'; 
import { Avatar, makeStyles } from "@material-ui/core";
import "./styles/SearchResults.css";
import { useDataLayerValue } from "../../contexts/DataLayer";

const useStyles = makeStyles({
  avatar: {
    height: '200px',
    width: '200px',
    boxShadow: '5px 8px 15px black',
  }
})

function SearchResults({artist, spotify}) {
  const [{}, dispatch] = useDataLayerValue();

  const classes = useStyles();

  const selectArtist = () => {
    spotify.getArtistAlbums(artist.id, { include_groups: ["single", "album"] })
    .then((results) => {
      dispatch({
        type: "SET_ALBUMS", 
        albums: results
      })
    })
    .then(() => {
      spotify.getArtistTopTracks(artist.id, "US")
      .then((results) => {
        dispatch({
          type: "SET_TRACKS", 
          tracks: results.tracks
        })
      })
    })
    .then(() => {
      dispatch({
        type: "SET_ARTIST",
        artist
      })

      dispatch({
        type: "SET_SEARCHING",
        searching: false
      })
    });
  }

  return (
    <div key={artist.id} className="results__itemBody">
      <div className="results__itemAvatar">
        <Avatar 
          src={artist.images.length ? artist.images[0].url : null} 
          alt={artist.name} 
          className={classes.avatar}
          onClick={selectArtist}
        />
      </div>
    <div className="results__itemInfo">
      <p>{artist.name}</p>
    </div>
  </div>
  )
}

export default SearchResults;