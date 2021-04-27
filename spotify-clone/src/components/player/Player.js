import React from "react";
import "./styles/Player.css";
import Sidebar from "./Sidebar";
import Body from "./Body";

function Player({ spotify }) {
  return (
  <div className="player">
    <div className="player__body">
      <Sidebar />
      <Body spotify={spotify} />
    </div>
  </div>
  )
}

export default Player;