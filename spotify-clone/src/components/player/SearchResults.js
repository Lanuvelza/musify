import React from 'react'; 
import { Avatar, makeStyles } from "@material-ui/core";
import "./styles/SearchResults.css";

const useStyles = makeStyles({
  avatar: {
    height: '200px',
    width: '200px',
    boxShadow: '5px 8px 15px black',
  }
})

function SearchResults({artists}) {
  const classes = useStyles();

  const searchedArtists = artists.items.map(artist => {
    return (
      <div key={artist.id} className="results__itemBody">
        <div className="results__itemAvatar">
          <Avatar 
            src={artist.images.length ? artist.images[0].url : null} 
            alt={artist.name} 
            className={classes.avatar}
          />
        </div>
        <div className="results__itemInfo">
          <p>{artist.name}</p>
        </div>
      </div>
    )
  });



  return (
    <div>
      <div className="results__body">
        {searchedArtists}
      </div>
    </div>
  )
}

export default SearchResults;