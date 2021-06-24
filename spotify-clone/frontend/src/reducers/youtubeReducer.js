export const initialYoutubeDataState = {
  channels: null, 
  channel: null, 
  videos: null,
  video: null,
  latest__video: null,
  youtube__playing: false,
  query: null,
  query_videos: null,
  keyword: null 
}

const youtubeReducer = (state, action) => {
  console.log(action); 

  switch(action.type) {
    case "SET_CHANNELS":
      return {
        ...state,
        channels: action.channels
      };
    case "SET_CHANNEL":
      return {
        ...state,
        channel: action.channel
      };
    case "SET_VIDEOS":
      return {
        ...state,
        videos: action.videos
      }
    case "SET_VIDEO":
      return {
        ...state,
        video: action.video
      };
    case "SET_LATEST_VIDEO": 
      return {
        ...state, 
        latest__video: action.latest__video
      }
    case "SET_YOUTUBE_PLAYING":
      return {
        ...state,
        youtube__playing: action.youtube__playing
      }
    case "SET_QUERY": 
      return {
        ...state, 
        query: action.query
      }
    case "SET_QUERY_VIDEOS": 
      return {
        ...state, 
        query_videos: action.query_videos
      }
    case "SET_KEYWORD": {
      return {
        ...state,
        keyword: action.keyword
      }
    }
    default:
      return state;
  }
};

export default youtubeReducer;