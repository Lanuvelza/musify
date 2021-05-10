import React, { useState } from "react"; 
import { Search } from "@material-ui/icons"; 
import "./styles/Header.css";
import { Avatar } from "@material-ui/core"; 
import { useDataLayerValue } from "../../contexts/DataLayer";


function Header({ spotify }) {
  console.log(spotify);
  const [{ user }, dispatch] = useDataLayerValue(); 
  const [search, setSearch] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    spotify.searchArtists(search)
    .then((results) => {
      console.log(results.artists);
      dispatch({
        type: "SET_ARTISTS",
        artists: results.artists
      });

      const artist_id = results.artists.items[0].id; 
      
      spotify.getArtistAlbums(artist_id, { include_groups: ["single", "album"] })
      .then((results) => {
        console.log("artist albums", results);
        dispatch({
          type: "SET_ALBUMS", 
          albums: results
        });
      });
      
      spotify.getArtistTopTracks(artist_id, "US")
      .then((results) => {
        console.log("artist tracks", results);
        dispatch({
          type: "SET_TRACKS",
          tracks: results.tracks
        });
      });
    });

    dispatch({
      type: "SET_CURRENT_PLAYLIST",
      current_playlist: null
    });

    setSearch("");
  }

  return (
    <div className="header">
      <div className="header__left">
         <Search className="header__left__searchIcon"/>
        <form onSubmit={handleSubmit}>
         <input 
          placeholder="Search for an Artist..." 
          type="text" 
          value={search} 
          onChange={(e) => {setSearch(e.target.value)}}
        />
        </form>
      </div>
      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}
export default Header;