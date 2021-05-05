import { Grid } from "@material-ui/core";
import { AlbumSharp } from "@material-ui/icons";
import React from "react"; 
import { useDataLayerValue } from "../../contexts/DataLayer"; 
import "./styles/LatestAlbum.css"; 



function LatestAlbum({spotify}) {
  const [{albums}, dispatch] = useDataLayerValue(); 

  return (
    <div className="latestalbum__info">
      {albums ? 
      <img 
        className="latestalbum__image" 
        src={albums.items[0].images[0].url} 
      /> : null}
      <div className="latestalbum__infoText">
        {albums ? 
        <>
          <strong>Latest Album</strong>
          <h2>{albums.items[0].name}</h2>
        </> : null }
      </div>
    </div>
  );
}

export default LatestAlbum; 