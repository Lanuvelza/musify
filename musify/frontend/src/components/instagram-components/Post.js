import React from 'react';
import TimeAgo from 'react-timeago'
import { useInstagramDataLayerValue } from '../../contexts/InstagramDataLayer';
import { formatTimestamp } from '../api/instagram/instagram';
import "./styles/Post.css"; 


function Post() {
  const [{posts, post}, instagramDispatch] = useInstagramDataLayerValue();

  return (
    <div className="post">
      <div className="post__header">
        <h2>{post?.node?.id === posts[0]?.node?.id ? "Latest Post" : null }</h2>
      </div>
      <div className="post__body">
        <img 
          src={`https://workers.iantyylam.workers.dev/${post?.node?.display_url}`}
          alt={post?.node?.shortcode}
          className={"post__picture"}
        />
        <div className="post__caption">
          <p>{post?.node?.edge_media_to_caption?.edges?.[0]?.node?.text}</p>
          <hr />
          <div className="post__timestamp">
            <TimeAgo date={formatTimestamp(post?.node?.taken_at_timestamp)} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post;