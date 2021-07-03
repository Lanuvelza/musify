import React from 'react';
import { useInstagramDataLayerValue } from '../../contexts/InstagramDataLayer';
import "./styles/UserPostItem.css"; 

function UserPostItem({post}) {
  const [{}, instagramDispatch] = useInstagramDataLayerValue();

  const selectPost = () => {
    instagramDispatch({
      type: "SET_POST",
      post: post
    })
  }

  return (
    <div className="post_item_body">
      <img 
        src={`https://workers.iantyylam.workers.dev/${post?.node?.display_url}`}
        alt={post?.node?.shortcode}
        className={"post_item_picture"}
        onClick={selectPost}
      />
    </div>
  )
}

export default UserPostItem;