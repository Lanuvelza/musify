import { Avatar, Box, makeStyles } from "@material-ui/core";
import { LinearScale, Opacity } from "@material-ui/icons";
import React from "react"; 
import { useDataLayerValue } from "../../contexts/DataLayer";
import "./styles/Artist.css";

const useStyles = makeStyles({
  section: props => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '40px',
    // background: `linear-gradiant(rgb(91, 87, 115), rgba(0,0,0,1)) url(${props.backgroundImage})`,
    backgroundImage: `url(${props.backgroundImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    borderRadius: '90px',
    height: '300px',
    width: '1050px',
    paddingTop: '15px',
    paddingBottom: '15px',
    boxShadow: '5px 10px 18px black',
  }),
  avatar: {
    height: '200px',
    width: '200px',
    borderStyle: 'solid',
    borderColor: 'white',
    borderWidth: '3px',
    boxShadow: '5px 8px 15px black'
  },
})


function Artist({artist, albums}) {
  // const [{albums}, dispatch] = useDataLayerValue();
  const props = { backgroundImage: albums ? albums.items[0].images[0].url : artist.images[0].url, backgroundColor: 'pink' }
  const classes = useStyles(props);


  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <div className={classes.section}>
        <Avatar src={artist.images[0].url} alt={artist.name} className={classes.avatar}/>
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