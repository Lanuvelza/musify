import React from 'react'; 
import InstagramProfile from './InstagramProfile';
import Post from './Post';
import UserPosts from './UserPosts'
import "./styles/InstagramBody.css"; 


function InstagramBody() {

  return (
    <div className="main__instagram__body">
      <InstagramProfile />
      <div className="posts_body">
        <Post />
        <UserPosts />
      </div>
    </div>
  )
}


export default InstagramBody;