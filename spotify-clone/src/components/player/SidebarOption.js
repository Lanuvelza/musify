import React from "react"; 
import { useDataLayerValue } from "../../contexts/DataLayer";
import "./styles/SidebarOption.css"


function SidebarOption({spotify, title, Icon, id, handleClick}) {
  const [{}, dispatch] = useDataLayerValue();

  const changePlaylist = (id) => {
    spotify.getPlaylist(id)
    .then((playlist) => {
      dispatch({
        type: 'SET_CURRENT_PLAYLIST', 
        current_playlist: playlist
      })
      dispatch({
        type: 'SET_ALBUMS',
        albums: null
      });
      dispatch({
        type: 'SET_ARTISTS',
        albums: null
      });
      dispatch({
        type: 'SET_TRACKS',
        tracks: null
      });
    })
  }

  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h4 onClick={handleClick}>{title}</h4> : <p onClick={() => {changePlaylist(id)}}>{title}</p>}
    </div>
  );
}

export default SidebarOption;