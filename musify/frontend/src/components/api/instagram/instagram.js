const axios = require('axios');

// authorizes Instagram account 
export const authorizeInstagram = () => {
  return axios.post(`/authorize`)
  .then((response) => {
    return response; 
  });
  
}

// searches for users from the given query 
export const searchInstagram = (query) => {
  return axios.get(`/search/${query}`)
  .then((response) => {
    return response.data;
  })
}

// filter users by verified as celebrities from Instagram 
export const filterByVerification = (users) => {
  return users.filter((user) => user.is_verified === true); 
}

// get the user 
export const getUser = (username) => {
  return axios.get(`/user/${username}`)
  .then((response) => {
    return response
  })
}

// get the users posts
export const getUserPosts = (userid) => {
  return axios.get(`/user/${userid}/posts`)
  .then((response) => {
    return response;
  })
}

// formats the Timestamp from the Instagram post data to the correct ISOString
export const formatTimestamp = (time) => {
  if (!time) {
    return 
  }

  const date = new Date(time * 1000); 
  const timestamp = date.toISOString();
  return timestamp; 
}