import React from "react";
import "./styles/Player.css";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import { useViewDataLayerValue } from "../../contexts/ViewDataLayer";
import { useDataLayerValue } from "../../contexts/DataLayer";
import SearchResults from "./SearchResults";

function Player({ spotify }) {
  const [{searching, artists}, dispatch] = useDataLayerValue();
  const [{view}, viewDispatch] = useViewDataLayerValue();

  return (
  <div className="player">
    <div className="player__body">
      <Sidebar spotify={spotify}/>
      <div className="main__body">
        <div className="main__header">
          <Header spotify={spotify} />
          {searching && 
          <div className="searchResults__body">
            {artists?.items?.length && artists?.items?.map((item) => (
            <SearchResults artist={item} key={item.id} spotify={spotify}/>
            ))}
          </div>}
        </div>
        {view === "SPOTIFY" && <Body spotify={spotify} /> }
      </div>
    </div>
    <Footer />
  </div>
  );
}

export default Player;