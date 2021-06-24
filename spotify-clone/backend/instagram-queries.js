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


const getUser = async (username) => {
  console.log(username)
  const user = await client.getUserByUsername({ username: username });
  console.log(user)
  return user;
}

const getUserPosts = async (userid) => {
  // console.log(userid) 
  const posts = await client._getPosts({ userId: userid });
  // console.log(posts.edge_owner_to_timeline_media.edges); 

  const media = posts.edge_owner_to_timeline_media.edges;
  let pageToken = posts.edge_owner_to_timeline_media.page_info.end_cursor; 
  let totalPosts = 12;


  while (totalPosts < 48 && pageToken) {

    const nextPosts = await client._getPosts({userId: userid, nextPageToken: pageToken});

    nextPosts.edge_owner_to_timeline_media.edges.map((edge) => {
      return media.push(edge);
    })

    pageToken = nextPosts.edge_owner_to_timeline_media.page_info.end_cursor;
    totalPosts += 12;
  }

  return media; 
}


module.exports = {
  login,
  search,
  getUser,
  getUserPosts
}