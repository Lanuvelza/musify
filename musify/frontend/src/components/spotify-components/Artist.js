import { Avatar, Box, makeStyles } from "@material-ui/core";
import React from "react"; 
import { useDataLayerValue } from "../../contexts/DataLayer";
import "./styles/Artist.css";

const useStyles = makeStyles({
  section: props => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    marginBottom: '40px',
    backgroundImage: `linear-gradient(to top, rgba(5, 4, 4, 0.8), transparent 40%), url(${props.backgroundImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '72vw',
    paddingTop: '25px',
    paddingBottom: '25px',
    boxShadow: '5px 10px 18px black',
  }),
  avatar: {
    height: '200px',
    width: '200px',
    margin: '20px',
    borderStyle: 'solid',
    borderColor: 'white',
    borderWidth: '3px',
    boxShadow: '5px 8px 15px black'
  },
})


function Artist({artist, spotify}) {
  const [{albums} ,dispatch] = useDataLayerValue();
  const props = { backgroundImage: albums ? albums[0]?.images[0].url : artist.images[0]?.url}
  const classes = useStyles(props);

  const handleClick = () => {
    spotify.getArtistTopTracks(artist.id, "US")
      .then((results) => {
        console.log("artist tracks", results);
        dispatch({
          type: "SET_TRACKS",
          tracks: results.tracks
        });

        dispatch({
          type: "SET_ALBUM",
          album: albums[0]
        })
      });
    }


  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <div className={classes.section}>
        <Avatar src={artist.images[0].url} alt={artist.name} className={classes.avatar} onClick={handleClick}/>
        <div className="artist__Info">
          <h2>{artist ? artist.name : null}</h2>
          <hr />
          <div className="artist__followers"> 
            <h2>Followers: {artist ? artist.followers.total : null}</h2>
          </div>
        </div>
      </div>
    </Box>
  )
}

export default Artist; 