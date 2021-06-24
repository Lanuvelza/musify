import React from 'react'; 
import InstagramProfile from './InstagramProfile';
import Post from './Post';
import UserPosts from './UserPosts'
import "./styles/InstagramBody.css"; 


function InstagramBody() {

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