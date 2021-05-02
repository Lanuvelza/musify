import React, { useState } from "react"; 
import { Search } from "@material-ui/icons"; 
import "./styles/Header.css";
import { Avatar } from "@material-ui/core"; 
import { useDataLayerValue } from "../../contexts/DataLayer";


function Header({ spotify }) {
  const [{ user }, dispatch] = useDataLayerValue(); 
  const [search, setSearch] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    spotify.searchTracks(search)
    .then((results) => {
      console.log(results.tracks);
      dispatch({
        type: "SET_TRACKS",
        tracks: results.tracks
      });
    });
    spotify.searchArtists(search)
    .then((results) => {
      console.log(results.artists);
      dispatch({
        type: "SET_ARTISTS",
        artists: results.artists
      });
    });
    spotify.searchAlbums(search)
    .then((results) => {
      console.log(results.albums);
      dispatch({
        type: "SET_ALBUMS",
        albums: results.albums
      });
    });
  }

  return (
    <div className="header">
      <div className="header__left">
         <Search className="header__left__searchIcon"/>
        <form onSubmit={handleSubmit}>
         <input placeholder="Search for Artists, Songs, or Albums" type="text" onChange={(e) => {setSearch(e.target.value)}}/>
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