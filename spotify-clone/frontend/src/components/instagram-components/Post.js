import React from 'react';
import TimeAgo from 'react-timeago'
import { useInstagramDataLayerValue } from '../../contexts/InstagramDataLayer';
import "./styles/Post.css"; 


function Post() {
  const [{latest__post}, instagramDispatch] = useInstagramDataLayerValue();

  const date = new Date(latest__post?.node?.taken_at_timestamp * 1000);
  const timestamp = date.toISOString();

  return (
    <div className="post">
      <div className="post__header">
        <h2>Latest Post</h2>
      </div>
      <div className="post__body">
        <img 
          src={`https://workers.iantyylam.workers.dev/${latest__post?.node?.display_url}`}
          alt={latest__post?.node?.shortcode}
          className={"post__picture"}
        />
        <div className="post__caption">
          <p>{latest__post?.node?.edge_media_to_caption?.edges?.[0]?.node?.text}</p>
          <hr />
          <div className="post__timestamp">
            <TimeAgo date={timestamp} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post;