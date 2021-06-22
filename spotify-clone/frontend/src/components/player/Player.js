import React from "react";
import "./styles/Player.css";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import { useViewDataLayerValue } from "../../contexts/ViewDataLayer";
import { useDataLayerValue } from "../../contexts/DataLayer";
import SearchResults from "./SearchResults";
import { useYoutubeDataLayerValue } from "../../contexts/YoutubeDataLayer";
import YoutubeSearchResults from "./YoutubeSearchResults";
import YoutubeBody from "../youtube-components/YoutubeBody";

function Player({ spotify }) {
  const [{searching, artists}] = useDataLayerValue();
  const [{channels}] = useYoutubeDataLayerValue();
  const [{view}] = useViewDataLayerValue();

  return (
  <div className="player">
    <div className="player__body">
      <Sidebar spotify={spotify}/>
      <div className="main__body">
        <div className="main__header">
          <Header spotify={spotify} />
          {searching && 
          <>
          <div className="searchResults__body">
            {artists?.items?.length && artists?.items?.map((item) => (
            <SearchResults artist={item} key={item.id} spotify={spotify}/>
            ))}
          </div>
          <hr />
          <div className="youtubeSearchResults__body">
            {channels?.length && channels?.map((channel) => (
              <YoutubeSearchResults channel={channel} key={channel.id.channelId} />
            ))}
          </div>
          </>}

        </div>
        {view === "SPOTIFY" && <Body spotify={spotify} /> }
        {view === "YOUTUBE" && <YoutubeBody /> }
      </div>
    </div>
    <Footer />
  </div>
  );
}

export default Player;