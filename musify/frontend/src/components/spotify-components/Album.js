import { PlayCircleFilled } from "@material-ui/icons";
import React from "react"; 
import TimeAgo from 'react-timeago';
import { useDataLayerValue } from "../../contexts/DataLayer"; 
import "./styles/Album.css"; 



function Album({spotify}) {
  const [{album, albums}, dispatch] = useDataLayerValue(); 

  const handleClick = () => {
    spotify.getAlbum(album?.id)
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

  const playAlbum = () => {
    spotify.getAlbum(album?.id)
    .then((album) => {
      console.log(album);
      console.log(album.tracks);
      console.log(album.uri);
      dispatch({
        type: "SET_ALBUM",
        album
      });
      dispatch({
        type: "SET_TRACKS",
        tracks: album.tracks.items
      });
      
      dispatch({
        type: "SET_URI", 
        uri: album.uri
      });
    });
  }

  return (
    <div className="album__info">
      {album && 
        <img 
          src={album?.images[0].url}
          alt={album?.name} 
          onClick={handleClick}/>}
      <div className="album__infoText">
        {album?.id === albums[0].id ? 
        <>
          <h1><strong>Latest Release</strong></h1>
          <h1><TimeAgo date={new Date(album?.release_date)} /></h1>
          <h2 onClick={handleClick}>{album?.name}</h2>
          <div className="album__play">
            <PlayCircleFilled className={"album__playButton"} onClick={playAlbum} />
            <div className="album__playMessage">
              <h2>Play Album</h2>
            </div>
          </div>
        </> : 
        <>
          <h2 onClick={handleClick}>{album?.name}</h2>
          <div className="album__play">
            <PlayCircleFilled className={"album__playButton"} onClick={playAlbum} />
            <div className="album__playMessage">
              <h2>Play Album</h2>
            </div>
          </div>        
        </>}
      </div>
    </div>
  );
}

export default Album; 