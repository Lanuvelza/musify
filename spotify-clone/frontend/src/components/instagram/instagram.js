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

export const filterByVerification = (users) => {
  console.log(users);
  return users.filter((user) => user.is_verified === true); 
}


// export const retrieveImageURL = (url) => {
//   console.log(url)
//   return axios.get(`/images/${url}`)
//   .then((response) => {
//     console.log(response); 
//     return response.data;
//   })
// }

