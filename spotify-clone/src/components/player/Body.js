import React from "react"; 
import "./styles/Body.css";
import { PlayCircleFilled, Favorite, MoreHoriz } from "@material-ui/icons"; 
import { useDataLayerValue } from "../../contexts/DataLayer";
import Header from "./Header";
import SongRow from "./SongRow";
import LatestAlbum from "./LatestAlbum";
import Artist from "./Artist";

function Body({spotify}) {
  const [{ discover_weekly, playlists, current_playlist, albums, tracks, artists }, dispatch] = useDataLayerValue();

  return (
    <div className="body">
      <Header spotify={spotify} /> 
      <div className="body__info">
        <div className="body__artistInfo">
          {artists ? <Artist artist={artists.items[0]} albums={albums} /> : null }
          {albums ? <LatestAlbum spotify={spotify}/>
          : 
          (current_playlist ? 
          <img src = {playlists.items ? playlists.items[0].images[0].url : null} alt="" /> :
          <img src = {discover_weekly?.images[0]?.url} alt="" /> )}
        </div>
        <div className="body__infoText">
          {albums ? null :
          
          (current_playlist ? 
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
          )
          }
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilled className="body__shuffle" />
          <Favorite fontSize="large" />
          <MoreHoriz />
        </div>
        {tracks ? tracks.items.map((track) => (
          <SongRow track={track} key={track.id} />
        )): 
        (current_playlist ? 
          current_playlist.tracks.items.map((item) => (
            <SongRow track={item.track} key={item.track.id}/>
          )) : 
          discover_weekly?.tracks.items.map((item) => (
            <SongRow track={item.track} key={item.track.id} />
          )))}
      
      </div>
    </div>
  );
}

export default Body;