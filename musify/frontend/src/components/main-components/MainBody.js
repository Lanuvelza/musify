import React from "react";
import "./styles/MainBody.css";
import Sidebar from "./Sidebar";
import SpotifyBody from "../spotify-components/SpotifyBody";
import Footer from "./Footer";
import Header from "./Header";
import { useViewDataLayerValue } from "../../contexts/ViewDataLayer";
import { useDataLayerValue } from "../../contexts/DataLayer";
import SpotifySearchResults from "./SpotifySearchResults";
import { useYoutubeDataLayerValue } from "../../contexts/YoutubeDataLayer";
import YoutubeSearchResults from "./YoutubeSearchResults";
import YoutubeBody from "../youtube-components/YoutubeBody";
import { useInstagramDataLayerValue } from "../../contexts/InstagramDataLayer";
import InstagramSearchResults from "./InstagramSearchResults";
import InstagramBody from "../instagram-components/InstagramBody";
import SearchSelection from "./SearchSelection";
import Home from "../home-components/Home";

function MainBody({ spotify }) {
  const [{searching, artists}] = useDataLayerValue();
  const [{channels}] = useYoutubeDataLayerValue();
  const [{view}] = useViewDataLayerValue();
  const [{instagram__users}] = useInstagramDataLayerValue();

  return (
  <div className="player">
    <div className="player__body">
      <Sidebar spotify={spotify}/>
      <div className="main__body">
        <div className="main__header">
          <Header spotify={spotify} />
          <div className="search__body">
            {view === "SEARCH" &&
            <>
            <div className="searchResults__body">
              <h2>Spotify Artists</h2>
              <div className="spotifySearchResults__body">
                {searching && artists?.items?.length ? 
                
                artists?.items?.map((item) => (
                <SpotifySearchResults artistItem={item} keID={item.id} spotify={spotify}/>
                )) : <p>No results found.</p>}
              </div>
              <h2>Youtube Channels</h2>
              <div className="youtubeSearchResults__body">
                {searching && channels?.length ? 

                channels?.map((channel) => (
                  <YoutubeSearchResults channelItem={channel} key={channel.id.channelId} />
                )) : <p>No results found.</p>}
              </div>
              <h2>Instagram Users</h2>
              <div className="instagramSearchResults__body">
                {searching && instagram__users?.length ? 
                
                instagram__users?.map((user) => (
                  <InstagramSearchResults userItem={user} key={user.pk} />
                )): <p>No results found.</p>}
              </div>
            </div>
            <SearchSelection /> 
            </>}

          </div>

        </div>
        {view === "HOME" && <Home />}
        {view === "SPOTIFY" && <SpotifyBody spotify={spotify} />}
        {view === "YOUTUBE" && <YoutubeBody />}
        {view === "INSTAGRAM" && <InstagramBody />}
      </div>
    </div>
    <Footer />
  </div>
  );
}

export default MainBody;