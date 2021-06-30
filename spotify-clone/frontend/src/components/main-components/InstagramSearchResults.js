import React from 'react';
import { Avatar, makeStyles } from "@material-ui/core";
import "./styles/InstagramSearchResults.css";
import { useInstagramDataLayerValue } from '../../contexts/InstagramDataLayer';
import { getUser, getUserPosts } from '../instagram/instagram';

const useStyles = makeStyles({
  avatar: {
    height: '120px',
    width: '120px',
    boxShadow: '5px 8px 15px black',
    margin: '2px',
  }
})


function InstagramSearchResults({userItem}) {
  const [{instagram__user}, instagramDispatch] = useInstagramDataLayerValue()

  const classes = useStyles(); 

  const selectUser = () => {
    getUser(userItem?.username)
    .then((response) => {
      console.log(response)

      const user = response.data;
      
      instagramDispatch({
        type: "SET_INSTAGRAM_USER",
        instagram__user: user
      })
    })

    getUserPosts(userItem?.pk)
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

      instagramDispatch({
        type: "SET_LATEST_POST",
        latest_post: latest_post
      })
    })
  }


  return (
    <div 
      key={userItem?.pk} 
      className={userItem.pk === instagram__user?.id ? "results__userBody__selected" : "results__userBody"}
      onClick={selectUser}
    >
      <div className="results__userAvatar">
      <Avatar 
        src={`https://workers.iantyylam.workers.dev/${userItem?.profile_pic_url}`}
        alt={userItem?.username}
        className={classes.avatar}
      />
      </div>
      <div className="results__userTitle">
        <p>{userItem?.username}</p>
        <p>{userItem?.full_name}</p>
      </div>

    </div>
  )
}

export default InstagramSearchResults;