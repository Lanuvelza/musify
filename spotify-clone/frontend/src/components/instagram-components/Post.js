import React from 'react';
import TimeAgo from 'react-timeago'
import { useInstagramDataLayerValue } from '../../contexts/InstagramDataLayer';
import "./styles/Post.css"; 


function Post() {
  const [{latest__post}, instagramDispatch] = useInstagramDataLayerValue();

  const date = new Date(latest__post?.node?.taken_at_timestamp * 1000);
  const timestamp = date.toISOString();

  return (
    <div className="post__body">
      <img 
        src={`https://workers.iantyylam.workers.dev/${latest__post?.node?.display_url}`}
        alt={latest__post?.node?.shortcode}
        className={"post__picture"}
      />
      <div className="post__caption">
        {latest__post?.node?.edge_media_to_caption?.edges?.[0]?.node?.text}
        <hr />
        <TimeAgo date={timestamp} />
      </div>
    </div>
  )
}

export default Post;