export const initialYoutubeDataState = {
  channels: null, 
  channel: null, 
  videos: null,
  video: null
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
    default:
      return state;
  }
};

export default youtubeReducer;