import React from "react"; 
import "./styles/SpotifyBody.css";
import { useDataLayerValue } from "../../contexts/DataLayer";
import SongRow from "./SongRow";
import Album from "./Album";
import Artist from "./Artist";
import AlbumsLibrary from "./AlbumsLibrary";

function SpotifyBody({spotify}) {
  const [{ 
    albums, 
    album, 
    tracks, 
    artist, 
  }] = useDataLayerValue();

  if (!artist) {
    return (
      <div className="spotify__default">
        <h2>No Spotify artist selected yet.</h2>
      </div>
    );
  }

  return (
    <div className="body">
      <div className="body__info">
        <div className="body__artistInfo">
          {artist && <Artist artist={artist} albums={albums} spotify={spotify} />}
          {album ? <Album album={album} spotify={spotify} /> : albums && <Album album={albums[0]} spotify={spotify} />}
        </div>
      </div>
      {tracks && <hr />}
      <div className="body__songs">
        {tracks && tracks.map((track) => (
          <SongRow track={track} key={track.id} />
        ))}
      </div>
      {albums && 
      <div className="body__albums">
        <h1>Albums & Singles</h1>
        <div className="body__albumsDisplay">
           {albums?.map((album) => (
            <AlbumsLibrary album={album} key={album.id} spotify={spotify} />
          ))}
        </div>
      </div>
      }
    </div>
  );
}

export default SpotifyBody;