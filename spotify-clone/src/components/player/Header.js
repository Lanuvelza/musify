import React, { useState } from "react"; 
import { Search } from "@material-ui/icons"; 
import "./styles/Header.css";
import { Avatar } from "@material-ui/core"; 
import { useDataLayerValue } from "../../contexts/DataLayer";


function Header({ spotify }) {
  console.log(spotify);
  const [{ user, searchmode }, dispatch] = useDataLayerValue(); 
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
    })
    .then(() => {

      dispatch({
        type: "SET_CURRENT_PLAYLIST",
        current_playlist: null
      })

      dispatch({
        type: "SET_SEARCHING", 
        searching: true
      })

      setSearch("");
    });
  }

  return (
    <div className="header">
      <div className={searchmode ? "header__left__searchbar" : "header__left"}>
        {searchmode && 
        <>
        <Search className="header__left__searchIcon"/>
        <form onSubmit={handleSubmit}>
         <input 
          placeholder="Search for an Artist..." 
          type="text" 
          value={search} 
          onChange={(e) => {setSearch(e.target.value)}}
        />
        </form>
        </>}
        
      </div>
      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}
export default Header;