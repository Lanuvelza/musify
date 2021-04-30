import React from "react"; 
import "./styles/Body.css";
import { PlayCircleFilled, Favorite, MoreHoriz } from "@material-ui/icons"; 
import { useDataLayerValue } from "../../contexts/DataLayer";
import Header from "./Header";
import SongRow from "./SongRow";

function Body({spotify}) {
  const [{ discover_weekly, playlists, current_playlist }, dispatch] = useDataLayerValue();
  console.log(playlists);
  console.log(discover_weekly);
  console.log(current_playlist)
  console.log(current_playlist.tracks.items);


  return (
    <div className="body">
      <Header spotify={spotify} /> 
      <div className="body__info">
        {/* <img src = {discover_weekly?.images[0]?.url} alt="" /> */}
        <img src = {playlists.items ? playlists.items[0].images[0].url : null} alt="" />
        <div className="body__infoText">
          {/* <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2> 
          <p>{discover_weekly?.description}</p> */}
          <strong>{ playlists.items ? playlists?.items[0]?.name : null}</strong>
          <h2>{playlists.items ? playlists?.items[0]?.owner.display_name : null}</h2>
          <p>{playlists.items ? playlists?.items[0]?.description : null}</p>
          {/* <p>{playlists.items ? playlists?.items[0]?.tracks.href : null}</p> */}
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilled className="body__shuffle" />
          <Favorite fontSize="large" />
          <MoreHoriz />
        </div>
        {/* {discover_weekly?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))} */}
        {current_playlist ? current_playlist.tracks.items.map((item) => (
          <SongRow track={item.track} />
        )) : null}
      </div>
    </div>
  );
}

export default Body;