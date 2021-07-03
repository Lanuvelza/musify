import React from "react";
import "./styles/Sidebar.css"
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search"; 
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from '@material-ui/icons/Instagram';
import { LibraryMusic } from "@material-ui/icons"; 
import { useDataLayerValue } from "../../contexts/DataLayer";
import { useViewDataLayerValue } from "../../contexts/ViewDataLayer";


function Sidebar() {
  const [{searchmode}, dispatch] = useDataLayerValue();
  const [{}, viewDispatch] = useViewDataLayerValue();

  const toggleHome = () => {
    viewDispatch({
      type: "SET_VIEW",
      view: "HOME"
    });
  }

  const toggleSearch = () => {
    console.log("Searchmode");
    dispatch({
      type: "SET_SEARCH_MODE",
      searchmode: !searchmode
    });
  }

  const toggleSpotify = () => {
    console.log("Spotify");
    viewDispatch({
      type: "SET_VIEW",
      view: "SPOTIFY"
    });
  }

  const toggleYouTube = () => {
    console.log("Youtube");
    viewDispatch({
      type: "SET_VIEW", 
      view: "YOUTUBE"
    })
  }

  const toggleInstagram = () => {
    console.log("Instagram");
    viewDispatch({
      type: "SET_VIEW",
      view: "INSTAGRAM"
    })
  }

  return (
    <div className="sidebar">
      <div className="logo">
        <h1>musify.</h1>
      </div>
      <SidebarOption title="Home" Icon={HomeIcon} handleClick={toggleHome} />
      <SidebarOption title="Search" Icon={SearchIcon} handleClick={toggleSearch} />
      <SidebarOption title="Spotify" Icon={LibraryMusic} handleClick={toggleSpotify} />
      <SidebarOption title="Youtube" Icon={YouTubeIcon} handleClick={toggleYouTube} />
      <SidebarOption title="Instagram" Icon={InstagramIcon} handleClick={toggleInstagram} />
    </div>
  );
}

export default Sidebar;