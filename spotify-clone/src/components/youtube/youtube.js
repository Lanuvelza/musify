const axios = require('axios');
const api_key = process.env.REACT_APP_YOUTUBE_API_KEY;
const baseURL = 'https://www.googleapis.com/youtube/v3';


export const searchChannels = async (name) => {
  return axios.get(`${baseURL}/search?key=${api_key}&q=${name}&type=channel&part=snippet`)
  .then(response => {
    return response;
  });
}




