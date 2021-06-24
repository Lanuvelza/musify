import React from 'react';
import TimeAgo from 'react-timeago'
import { useInstagramDataLayerValue } from '../../contexts/InstagramDataLayer';
import "./styles/Post.css"; 


function Post() {
  const [{latest__post, post}, instagramDispatch] = useInstagramDataLayerValue();

  let date = null;
  let timestamp = null;

  if (post) {
    date = new Date(post?.node?.taken_at_timestamp * 1000);
    timestamp = date.toISOString();
  } else {
    date = new Date(latest__post?.node?.taken_at_timestamp * 1000); 
    timestamp = date.toISOString();
  }

  return (
    <div className="post">
      <div className="post__header">
        <h2>{post?.node?.id === latest__post?.node?.id ? "Latest Post" : null }</h2>
      </div>
      <div className="post__body">
        <img 
          src={post ? 
              `https://workers.iantyylam.workers.dev/${post?.node?.display_url}`
            : `https://workers.iantyylam.workers.dev/${latest__post?.node?.display_url}` }
          alt={post ? post?.node?.shortcode : latest__post?.node?.shortcode}
          className={"post__picture"}
        />
        <div className="post__caption">
          <p>{post ? 
          post?.node?.edge_media_to_caption?.edges?.[0]?.node?.text :
          latest__post?.node?.edge_media_to_caption?.edges?.[0]?.node?.text
          }</p>
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