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

function SearchResults({artist, spotify}) {
  const [{}, dispatch] = useDataLayerValue();

  const classes = useStyles();

  const selectArtist = () => {

    spotify.getArtistAlbums(artist.id, {include_groups: ["album", "single"], limit: 50})
    .then((results) => {

      console.log(results);

      const albums = filterAblumsByMarket(results.items, "US");
      console.log(albums);

      dispatch({
        type: "SET_ALBUMS", 
        albums: albums
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

      dispatch({
        type: "SET_ALBUM", 
        album: null
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