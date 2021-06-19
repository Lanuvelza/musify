export const initialYoutubeDataState = {
  channels: null, 
  channel: null, 
  videos: null,
  video: null,
  latest__video: null,
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
    default:
      return state;
  }
};

export default youtubeReducer;