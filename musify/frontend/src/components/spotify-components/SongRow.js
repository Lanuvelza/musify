import React from "react"; 
import { useDataLayerValue } from "../../contexts/DataLayer";
import "./styles/SongRow.css"

function SongRow({ track }) {
  const [{album, current_track}, dispatch] = useDataLayerValue();

  const playTrack = () => {
    dispatch({
      type: "SET_CURRENT_TRACK", 
      current_track: track
    })
    dispatch({
      type: "SET_URI",
      uri: track.uri
    })
  }

  return (
    <div className={current_track.id === track.id ? "songRow__selected" : "songRow"} onClick={playTrack}>
      {track.album ? 
        <img src={track.album.images[0]?.url} alt="" className="songRow__album" /> :
        <img src={album && album.images[0]?.url} alt="" className="songRow__album" /> }
      
      <div className="songRow__info">
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => artist.name).join(", ")} -{" "}
          {track.album ? track.album.name : album && album.name}
        </p>
      </div>
    </div>
  );
}

export default SongRow;
