import React from 'react'; 
import { useDataLayerValue } from '../../contexts/DataLayer';
import "./styles/Albums.css";


function Albums({album, spotify}) {
  const [{}, dispatch] = useDataLayerValue();
  
  const selectAlbum = () => {
    console.log(album.id);
    spotify.getAlbum(album.id)
    .then((album) => {
      console.log(album);
      console.log(album.tracks);
      dispatch({
        type: "SET_ALBUM",
        album
      });
      dispatch({
        type: "SET_TRACKS",
        tracks: album.tracks.items
      })
    });
  }

  return (
    <div className="album__body">
      <div className="album__cover" onClick={selectAlbum}>
        <img src={album?.images[0]?.url}/>
      </div>
      <div className="album__Info">
        <h2>{album?.name}</h2>
        <h3>{album?.album_type === "single" ? "EP" : "Album"}</h3>
      </div>
      
    </div>
  )
}

export default Albums; 