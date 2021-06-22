const axios = require('axios');

const credentials = {
  username: process.env.REACT_APP_INSTAGRAM_USERNAME,
  password: process.env.REACT_APP_INSTAGRAM_PASSWORD
}

export const authorizeInstagram = () => {
  const { username, password } = credentials;  
  console.log(username, password);
  return axios.post(`/authorize`)
  .then((response) => {
    console.log(response)
    return response; 
  });
  
}

export const searchInstagram = (query) => {
  return axios.get(`/search/${query}`)
  .then((response) => {
    console.log(response);
    return response.data;
  })
}





