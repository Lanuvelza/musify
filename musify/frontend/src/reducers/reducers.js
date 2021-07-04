export const initialState = {
  user: null, 
  token: null, 
  playing: false,
  tracks: null,
  latest_album_tracks: null,
  current_track: null,
  artist: null, 
  artists: null,
  album: null,
  latest_album: null,
  albums: null,
  uri: null, 
  searching: false,
  searchmode: true
}

const reducer = (state, action) => {
  
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
    case "SET_TRACKS": 
      return {
        ...state,
        tracks: action.tracks,
      };
    case "SET_LATEST_ALBUM_TRACKS": 
      return {
        ...state, 
        latest_album_tracks: action.latest_album_tracks
      }
    case "SET_CURRENT_TRACK":
      return {
        ...state,
        current_track: action.current_track,
      }
    case "SET_ARTIST": 
      return {
        ...state, 
        artist: action.artist
      };
    case "SET_ARTISTS": 
      return {
        ...state,
        artists: action.artists,
      };
    case "SET_ALBUM": 
      return {
        ...state,
        album: action.album,
      };
    case "SET_LATEST_ALBUM":
      return {
        ...state,
        latest_album: action.latest_album
      }
    case "SET_ALBUMS":
      return {
        ...state,
        albums: action.albums
      };
    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing
      };
    case "SET_URI":
      return {
        ...state, 
        uri: action.uri
      };
    case "SET_SEARCH_MODE":
      return {
        ...state,
        searchmode: action.searchmode
      }
    case "SET_SEARCHING":
      return {
        ...state,
        searching: action.searching
      }
    default:
      return state;
  }
};

export default reducer;