import { Avatar, Box, makeStyles } from "@material-ui/core";
import { LinearScale } from "@material-ui/icons";
import React from "react"; 
import "./styles/Artist.css";

const useStyles = makeStyles({
  section: props => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
    // background: `linear-gradiant(rgb(91, 87, 115), rgba(0,0,0,1)) url(${props.backgroundImage})`,
    backgroundImage: `url(${props.backgroundImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'auto',
    borderRadius: '90px',
    height: '600px',
    width: '640px',
    paddingTop: '15px',
    paddingBottom: '15px',
    // backgroundColor: props.backgroundColor
  }),
  avatar: {
    height: '200px',
    width: '200px',
    borderStyle: 'solid',
    borderColor: 'white',
    borderWidth: '3px',
  },
})


function Artist({artist}) {
  const props = { backgroundImage: artist.images[0].url, backgroundColor: 'pink' }
  const classes = useStyles(props);


  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <div className={classes.section}>
        {/* <Avatar src={artist.images[0].url} alt={artist.name} className={classes.avatar}/> */}
        <div className="artist__Info">
          <h2>{artist.name}</h2>
          <hr />
          <div className="artist__followers"> 
            <h2>Followers: {artist.followers.total}</h2>
          </div>
        </div>
      </div>
    </Box>
  )
}

export default Artist; 