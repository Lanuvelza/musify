import React from "react";
import "./styles/Player.css";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import { useViewDataLayerValue } from "../../contexts/ViewDataLayer";

function Player({ spotify }) {
  const [{view}, viewDispatch] = useViewDataLayerValue();

  return (
  <div className="player">
    <div className="player__body">
      <Sidebar spotify={spotify}/>
      <div className="main__body">
        <div className="main__header">
          <Header spotify={spotify} />
        </div>
        {view === "SPOTIFY" && <Body spotify={spotify} /> }
      </div>
    </div>
    <Footer />
  </div>
  );
}

export default Player;