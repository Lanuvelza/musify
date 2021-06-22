const axios = require('axios');
const api_key = process.env.REACT_APP_YOUTUBE_API_KEY;
const baseURL = 'https://www.googleapis.com/youtube/v3';


// sort channels by the number of suscribers in descending order
export const sortChannelsBySubscriberCount = (channels) => {
  const sortedChannels =  channels.sort((a,b) => {
    if (Number(a.statistics.subscriberCount) < Number(b.statistics.subscriberCount)) {
      return 1;
    }
    if (Number(a.statistics.subscriberCount) > Number(b.statistics.subscriberCount)) {
      return -1;
    }
    return 0; 
  });
  return sortedChannels;
}

// filter channels that show suscriber count only 
export const filterChannelsByVisibleSubscriberCount = (channels) => {
  return channels.filter((channel) => channel.statistics.hiddenSubscriberCount === false);
}

// searches channels based on the query term 
export const searchChannels = (name) => {
  return axios.get(`${baseURL}/search?key=${api_key}&q=${name}&type=channel&part=snippet&maxResults=25`)
  .then(response => {

    // console.log(response);
    
    const ids = response.data.items.map((item) => {
      return item.id.channelId;
    }) 

    // console.log(ids);

    const channels = ids.map((id) => {
      return axios.get(`${baseURL}/channels?key=${api_key}&part=snippet,contentDetails,statistics&id=${id}`)
      .then(result => {
        // console.log(result);
        return result.data;
      });
    })

    const channelsData = Promise.all(channels).then(data => {
      console.log(data);
      const channelDataDetails = data.map((detail) => {
        // console.log(detail);
        // console.log(detail.items);
        // console.log(detail.items[0]);
        return detail.items[0];
      })

      return channelDataDetails;
    });

    // console.log(channelsData);

    return channelsData;
  });
}

// retrieves all the videos from a channel
export const getChannelVideos = async (channel) => {

  const uploadID = channel.contentDetails.relatedPlaylists.uploads;

  const response = await axios.get(`${baseURL}/playlistItems?part=snippet,contentDetails&playlistId=${uploadID}&maxResults=50&key=${api_key}`);

  const results = response.data;
  let pageToken = results.nextPageToken;
  let totalVideos = 0; 


  const allVideos = [];

  results.items.map(item => {
    return allVideos.push(item);
  })

  while (totalVideos < 100 && pageToken) {
    const nextPageResponse = await axios.get(`${baseURL}/playlistItems?part=snippet,contentDetails&playlistId=${uploadID}&maxResults=50&key=${api_key}&pageToken=${pageToken}`)
    const nextPageResults = nextPageResponse.data.items;

    nextPageResults.map((item) => {
      return allVideos.push(item);
    });
 
    pageToken = nextPageResponse.data.nextPageToken; 
    totalVideos += 50;

  }

  return allVideos;
}



