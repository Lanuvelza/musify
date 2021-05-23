import React from 'react'; 
import { useDataLayerValue } from '../../contexts/DataLayer';
import { Avatar, makeStyles } from "@material-ui/core";
import "./styles/SearchResults.css";

const useStyles = makeStyles({
  avatar: {
    height: '200px',
    width: '200px',
    borderStyle: 'solid',
    borderColor: 'white', 
    borderWidth: '3px',
    boxShadow: '5px 8px 15px black',
    margin: '15px',
    justifyContent: 'center',
  }
})

function SearchResults({artists}) {
  // const [{artists}, dispatch] = useDataLayerValue();
  console.log(artists);

  const classes = useStyles();

  const searchedArtists = artists.items.map(artist => {
    return (
      <div key={artist.id} className="results__itemBody">
        <Avatar 
          src={artist.images.length ? artist.images[0].url : null} 
          alt={artist.name} 
          className={classes.avatar}
        />
        <div className="results__itemInfo">
          {artist.name}
        </div>
      </div>
    )
  });



  return (
    <div>
      {/* <div className="results__header">
        <h1>Search Results</h1>
      </div> */}
      <div className="results__body">
        {searchedArtists}
      </div>
    </div>
  )
}

export default SearchResults;