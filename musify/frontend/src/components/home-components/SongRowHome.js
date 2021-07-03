import React from "react"; 
import { useDataLayerValue } from "../../contexts/DataLayer";
import "./styles/SongRowHome.css"

function SongRowHome({ track }) {
  const [{latest_album, current_track}, dispatch] = useDataLayerValue();

  const playTrack = () => {
    console.log(track);
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
    <div className={current_track.id === track.id ? "songRowHome__selected" : "songRowHome"} onClick={playTrack}>
      {track.album ? 
        <img src={track.album.images[0]?.url} alt="" className="songRowHome__album" /> :
        <img src={latest_album?.images[0]?.url} alt="" className="songRowHome__album" /> }
      
      <div className="songRowHome__info">
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => artist.name).join(", ")} -{" "}
          {track.album ? track.album.name : latest_album?.name}
        </p>
      </div>
    </div>
  );
}

export default SongRowHome;