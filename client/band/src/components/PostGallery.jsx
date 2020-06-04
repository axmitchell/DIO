import React from 'react';
import PostThumbnail from './PostThumbnail.jsx'

const PostGallery = props => {
  if (props.posts.length === 0) {
    return (
      <div id='PostGallery' className='Content' style={{justifyContent: 'center', alignItems: 'center'}} >
        You have no posts
      </div>
    );
  } else {
    return (
      <div id='PostGallery' className='Content'>
        {props.posts.map(post => {
          return <PostThumbnail key={post.id} post={post}  handlePage={props.handlePage} handlePostView={props.handlePostView}/>
        })}
      </div>
    )
  }
}

export default PostGallery;
