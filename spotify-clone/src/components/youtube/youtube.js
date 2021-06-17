const axios = require('axios');
const api_key = process.env.REACT_APP_YOUTUBE_API_KEY;
const baseURL = 'https://www.googleapis.com/youtube/v3';


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

export const filterChannelsByVisibleSubscriberCount = (channels) => {
  return channels.filter((channel) => channel.statistics.hiddenSubscriberCount === false);
}


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




