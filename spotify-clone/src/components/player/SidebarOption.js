import React from "react"; 
import { useDataLayerValue } from "../../contexts/DataLayer";
import "./styles/SidebarOption.css"


function SidebarOption({spotify, title, Icon, id}) {
  console.log(spotify)
  const [{}, dispatch] = useDataLayerValue();

  const changePlaylist = (id) => {
    console.log(id);
    spotify.getPlaylist(id)
    .then((playlist) => {
      console.log(playlist);
      dispatch({
        type: 'SET_CURRENT_PLAYLIST', 
        current_playlist: playlist
      })
    })
  }

  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h4>{title}</h4> : <p onClick={() => {changePlaylist(id)}}>{title}</p>}
    </div>
  );
}

export default SidebarOption;