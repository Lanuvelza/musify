import React from 'react';
import { Avatar, makeStyles } from "@material-ui/core";
import "./styles/InstagramSearchResults.css";
import { useInstagramDataLayerValue } from '../../contexts/InstagramDataLayer';
import { getUser, getUserPosts } from '../instagram/instagram';

const useStyles = makeStyles({
  avatar: {
    height: '200px',
    width: '200px',
    boxShadow: '5px 8px 15px black',
  }
})


function InstagramSearchResults({user, image_url}) {
  const [{}, instagramDispatch] = useInstagramDataLayerValue()

  const classes = useStyles(); 

  const selectUser = () => {
    getUser(user?.username)
    .then((response) => {
      console.log(response)

      const user = response.data;
      
      instagramDispatch({
        type: "SET_INSTAGRAM_USER",
        instagram__user: user
      })
    })

    getUserPosts(user?.pk)
    .then((response) => {
      console.log(response)

      const posts = response.data; 
      const latest_post = response.data[0];

      instagramDispatch({
        type: "SET_POSTS",
        posts: posts
      })

      instagramDispatch({
        type: "SET_POST",
        post: latest_post
      })
    })
  }


  return (
    <div key={user?.pk} className="results__userBody">
      <div className="results__userAvatar">
      <Avatar 
        src={`https://workers.iantyylam.workers.dev/${user.profile_pic_url}`}
        alt={user?.username}
        className={classes.avatar}
        onClick={selectUser}
      />
      </div>
      <div className="results__userTitle">
        <p>{user?.username}</p>
        <p>{user?.full_name}</p>
      </div>

    </div>
  )
}

export default InstagramSearchResults;