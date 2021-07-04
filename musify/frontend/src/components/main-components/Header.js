import React, { useState } from "react"; 
import { Search } from "@material-ui/icons"; 
import "./styles/Header.css";
import { Avatar } from "@material-ui/core"; 
import { useDataLayerValue } from "../../contexts/DataLayer";
import { filterChannelsByVisibleSubscriberCount, searchChannels, sortChannelsBySubscriberCount } from "../api/youtube/youtube";
import { useYoutubeDataLayerValue } from "../../contexts/YoutubeDataLayer";
import { filterByVerification, searchInstagram } from "../api/instagram/instagram";
import { useInstagramDataLayerValue } from "../../contexts/InstagramDataLayer";
import { useViewDataLayerValue } from "../../contexts/ViewDataLayer";


function Header({ spotify }) {
  const [{ user, searchmode }, dispatch] = useDataLayerValue(); 
  const [{}, youtubeDispatch] = useYoutubeDataLayerValue();
  const [{}, instagramDispatch] = useInstagramDataLayerValue();
  const [{}, viewDispatch] = useViewDataLayerValue();
  const [search, setSearch] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    searchInstagram(search)
    .then(response => {
      const users = response.users.map((item) => {
        return item.user
      });
      const results = filterByVerification(users);
      instagramDispatch({
        type: "SET_INSTAGRAM_USERS",
        instagram__users: results
      })
    })

    searchChannels(search)
    .then((results) => {
      const OrderedChannels = sortChannelsBySubscriberCount(filterChannelsByVisibleSubscriberCount(results));

      youtubeDispatch({
        type: "SET_CHANNELS",
        channels: OrderedChannels
      })

      youtubeDispatch({
        type: "SET_QUERY",
        query: search
      })
    })

    spotify.searchArtists(search)
    .then((results) => {
      dispatch({
        type: "SET_ARTISTS",
        artists: results.artists
      });
    })
    .then(() => {

      dispatch({
        type: "SET_CURRENT_PLAYLIST",
        current_playlist: null
      })

      dispatch({
        type: "SET_SEARCHING", 
        searching: true
      })

      viewDispatch({
        type: "SET_VIEW",
        view: "SEARCH"
      })

      setSearch("");
    });
  }

  return (
    <div className="header">
      <div className={searchmode ? "header__left__searchbar" : "header__left"}>
        {searchmode && 
        <>
        <Search className="header__left__searchIcon"/>
        <form onSubmit={handleSubmit}>
         <input 
          placeholder="Search for an Artist..." 
          type="text" 
          value={search} 
          onChange={(e) => {setSearch(e.target.value)}}
        />
        </form>
        </>}
        
      </div>
      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}
export default Header;