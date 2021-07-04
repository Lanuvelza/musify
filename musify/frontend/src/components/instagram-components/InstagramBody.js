import React from 'react'; 
import InstagramProfile from './InstagramProfile';
import Post from './Post';
import UserPosts from './UserPosts'
import "./styles/InstagramBody.css"; 
import { useInstagramDataLayerValue } from '../../contexts/InstagramDataLayer';


function InstagramBody() {
  const [{instagram__user}, instagramDispatch] = useInstagramDataLayerValue();

  if (!instagram__user) {
    return (
      <div className="instagram__default">
        <h2>No Instagram artist account selected yet.</h2>
      </div>
    );
  }

  return (
    <div className="main__instagram__body">
      <div className="main__instagram__body__top">
        <InstagramProfile />
        <Post />
      </div>
      <div className="posts_body">
        <UserPosts />
      </div>
    </div>
  )
}


export default InstagramBody;