export const initialState = {
  user: null, 
  token: null, 
  playlists: [], 
  playing: false,
  item: null,
  tracks: null,
  artists: null,
  albums: null,
  current_playlist: null
}

const reducer = (state, action) => {
  console.log(action); 
  
  switch(action.type) {
    case "SET_USER": 
      return {
        ...state, 
        user: action.user,
      }; 
    case "SET_TOKEN": 
      return {
        ...state,
        token: action.token
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      }
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state, 
        discover_weekly: action.discover_weekly,
      };
    case "SET_CURRENT_PLAYLIST":
      return {
        ...state,
        current_playlist: action.current_playlist,
      };
    case "SET_TRACKS": 
      return {
        ...state,
        tracks: action.tracks,
      };
    case "SET_ARTISTS": 
      return {
        ...state,
        artists: action.artists,
      };
    case "SET_ALBUMS":
      return {
        ...state,
        albums: action.albums
      }
    default:
      return state;
  }
};

export default reducer;