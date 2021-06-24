import React from 'react';
import { useInstagramDataLayerValue } from '../../contexts/InstagramDataLayer';
import "./styles/UserPosts.css"; 
import UserPostItem from './UserPostItem';


function UserProfile() {
  const [{posts, instagram__user}, instagramDispatch] = useInstagramDataLayerValue(); 

  

  return (
    <div className="posts_library">
      <div className="posts_library_header">
        <h2>Posts from {instagram__user?.full_name}</h2>
      </div>
      <div className="posts_library_body">
        {posts?.map((post) => (
          <UserPostItem post={post} />
        ))}
      </div>
    </div>
  )
}

export default UserProfile;