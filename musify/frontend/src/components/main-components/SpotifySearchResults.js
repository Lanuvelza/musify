import React from 'react'; 
import { Avatar, makeStyles } from "@material-ui/core";
import "./styles/SpotifySearchResults.css";
import { useDataLayerValue } from "../../contexts/DataLayer";

const useStyles = makeStyles({
  avatar: {
    height: '120px',
    width: '120px',
    boxShadow: '5px 8px 15px black',
    margin: '2px',
  },
})

const filterAblumsByMarket = function(albums, country) {
  const filteredAlbums = [];
  const titles = {}; 
  
  for(const album of albums) {
    if(album.available_markets.includes(country) && !titles[album.name]) {
      titles[album.name] = 1;
      filteredAlbums.push(album);
    }
  }

  filteredAlbums.sort((a,b) =>  {
    if (a.release_date < b.release_date) {
      return 1; 
    }
    if (a.release_date > b.release_date) {
      return -1; 
    }
    return 0; 
  })

  return filteredAlbums; 
}

function SpotifySearchResults({artistItem, keyID, spotify}) {
  const [{artist} ,dispatch] = useDataLayerValue();

  const classes = useStyles();

  const selectArtist = () => {

    spotify.getArtistAlbums(artistItem.id, {include_groups: ["album", "single"], limit: 50})
    .then((results) => {

      const albums = filterAblumsByMarket(results.items, "US");
      const latest_album = albums[0]; 

      dispatch({
        type: "SET_ALBUMS", 
        albums: albums
      })

      dispatch({
        type: "SET_ALBUM", 
        album: latest_album
      })

      dispatch({
        type: "SET_LATEST_ALBUM",
        latest_album: latest_album
      })

      spotify.getAlbum(latest_album.id)
      .then((album) => {
        dispatch({
          type: "SET_LATEST_ALBUM_TRACKS",
          latest_album_tracks: album.tracks.items
        })
      }) 
    })
    .then(() => {
      spotify.getArtistTopTracks(artistItem.id, "US")
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
        artist: artistItem
      })
    });
  }

  return (
    <div 
      key={keyID} 
      className={artistItem.id === artist?.id ? "results__itemBody__selected" : "results__itemBody"} 
      onClick={selectArtist}
    >
      <div className="results__itemAvatar">
        <Avatar 
          src={artistItem.images.length ? artistItem.images[0].url : null} 
          alt={artistItem.name} 
          className={classes.avatar}
        />
      </div>
    <div className="results__itemInfo">
      <p>{artistItem.name}</p>
    </div>
  </div>
  )
}

export default SpotifySearchResults;