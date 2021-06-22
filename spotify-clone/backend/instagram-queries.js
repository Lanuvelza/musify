const Instagram = require('instagram-web-api'); 
const axios = require('axios'); 
require('dotenv').config();

const credentials = {
  username: process.env.REACT_APP_INSTAGRAM_USERNAME,
  password: process.env.REACT_APP_INSTAGRAM_PASSWORD
}

const client = new Instagram({ username: credentials.username, password: credentials.password })

const login = async () => {
  return client.login()
  .then(() => {
     return client.getProfile()
    .then((response) => {
      console.log("instagram-queries response", response);
      return response;
    })
  })
}

const search = async (query) => {
  console.log(query)
  const results = await client.search({query: query})
  console.log(results.users); 
  return results;
}


module.exports = {
  login,
  search
}