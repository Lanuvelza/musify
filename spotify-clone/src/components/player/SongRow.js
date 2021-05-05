import React from "react"; 
import { useDataLayerValue } from "../../contexts/DataLayer";
import "./styles/SongRow.css"

function SongRow({ track }) {
  const [{album}, dispatch] = useDataLayerValue();

  return (
    <div className="songRow">
      {track.album ? 
        <img src={track.album.images[0].url} alt="" className="songRow__album" /> :
        <img src={album.images[0].url} alt="" className="songRow__album" /> }
      
      <div className="songRow__info">
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => artist.name).join(", ")} -{" "}
          {track.album ? track.album.name : album.name}
        </p>
      </div>
    </div>
  );
}

export default SongRow;
