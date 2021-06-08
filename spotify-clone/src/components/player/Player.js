import React from "react";
import "./styles/Player.css";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

function Player({ spotify }) {
  return (
  <div className="player">
    <div className="player__body">
      <Sidebar spotify={spotify}/>
      <div className="main__body">
        <div className="main__header">
          <Header spotify={spotify} />
        </div>
        <Body spotify={spotify} />
      </div>
    </div>
    <Footer />
  </div>
  );
}

export default Player;