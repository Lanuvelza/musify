import React from "react";
import "./styles/Sidebar.css"
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search"; 
import { LibraryMusic } from "@material-ui/icons"; 
import { useDataLayerValue } from "../../contexts/DataLayer";


function Sidebar({ spotify }) {
  const [{ playlists, searchmode}, dispatch] = useDataLayerValue();

  const toggleHome = () => {
    dispatch({
      type: "SET_CURRENT_PLAYLIST",
      current_playlist: null
    });
    dispatch({
      type: 'SET_ALBUMS',
      albums: null
    });
    dispatch({
      type: 'SET_ALBUM',
      album: null
    });
    dispatch({
      type: 'SET_ARTISTS',
      albums: null
    });
    dispatch({
      type: "SET_ARTIST", 
      artist: null
    });
    dispatch({
      type: 'SET_TRACKS',
      tracks: null
    });
  }

  const toggleSearch = () => {
    console.log("Searchmode");
    dispatch({
      type: "SET_SEARCH_MODE",
      searchmode: !searchmode
    });
  }

  return (
    <div className="sidebar">
      <img 
        className="sidebar__logo"
        src="https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg"
        alt="Spotify logo"
        onClick={toggleHome}
      />

      <SidebarOption title="Home" Icon={HomeIcon} handleClick={toggleHome} />
      <SidebarOption title="Search" Icon={SearchIcon} handleClick={toggleSearch} />
      <SidebarOption title="Your Library" Icon={LibraryMusic} />
      <br /> 
      <strong className="sidebar_title">PLAYLISTS</strong>
      <hr /> 
      {playlists?.items?.map((playlist) => (
        <SidebarOption 
          spotify={spotify} 
          title={playlist.name} 
          key={playlist.id} 
          id={playlist.id}
        />
      ))}
    </div>
  );
}

export default Sidebar;