import { Grid } from "@material-ui/core";
import { AlbumSharp, DragHandle, PlayCircleFilled } from "@material-ui/icons";
import React from "react"; 
import { useDataLayerValue } from "../../contexts/DataLayer"; 
import "./styles/LatestAlbum.css"; 



function LatestAlbum({spotify}) {
  const [{albums}, dispatch] = useDataLayerValue(); 
  console.log(albums);
  console.log(spotify);

  // Sort by latest release date
  albums.items.sort((a, b) => {
    if (a.release_date < b.release_date) {
      return 1;
    }
    if (a.release_date > b.release_date) {
      return -1;
    }
    return 0;
  })

  const handleClick = () => {
    spotify.getAlbum(albums.items[0].id)
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
    spotify.getAlbum(albums.items[0].id)
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

      // dispatch({
      //   type: "SET_PLAYING", 
      //   playing: true
      // });

    });
  }

  return (
    <div className="latestalbum__info">
      {albums ? 
      <img 
        src={albums.items[0].images[0].url} 
        onClick={handleClick}
      /> : null}
      <div className="latestalbum__infoText">
        {albums ? 
        <>
          <h1><strong>Latest Release</strong></h1>
          <h2 onClick={handleClick} >{albums.items[0].name}</h2>
          <PlayCircleFilled className={"latestalbum__playButton"} onClick={playAlbum} />
        </> : null }
      </div>
    </div>
  );
}

export default LatestAlbum; 