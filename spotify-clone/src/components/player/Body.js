import React from "react"; 
import "./styles/Body.css";
import { PlayCircleFilled, Favorite, MoreHoriz } from "@material-ui/icons"; 
import { useDataLayerValue } from "../../contexts/DataLayer";
import Header from "./Header";
import SongRow from "./SongRow";

function Body({spotify}) {
  const [{ discover_weekly, playlists, current_playlist, albums }, dispatch] = useDataLayerValue();
  console.log(playlists);
  console.log(discover_weekly);
  console.log(current_playlist);

  return (
    <div className="body">
      <Header spotify={spotify} /> 
      <div className="body__info">
        {albums ? albums.items.map((item) => (
          <img src={item.images[0].url} />
        )) : null}
        {current_playlist ? 
        <img src = {playlists.items ? playlists.items[0].images[0].url : null} alt="" /> :
        <img src = {discover_weekly?.images[0]?.url} alt="" /> }
        <div className="body__infoText">
          {current_playlist ? 
          <>
            <strong>PLAYLIST</strong>
            <h2>{current_playlist.name}</h2> 
            <p>{current_playlist.description}</p>
          </> :
          <>
            <strong>PLAYLIST</strong>
            <h2>Discover Weekly</h2>
            <p>{discover_weekly?.description}</p>
          </>
           }
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilled className="body__shuffle" />
          <Favorite fontSize="large" />
          <MoreHoriz />
        </div>
        {current_playlist ? 
        current_playlist.tracks.items.map((item) => (
          <SongRow track={item.track} key={item.track.id}/>
        )) : 
        discover_weekly?.tracks.items.map((item) => (
          <SongRow track={item.track} key={item.track.id} />
        ))}
      </div>
    </div>
  );
}

export default Body;