import React from 'react';

const PostThumbnail = props => {
  let { post, handlePage, handlePostView } = props;
  return (
    <div className='PostThumbnail' onClick={() => { handlePostView(post); handlePage('Post') }}>
      <div>{post.user.location}</div>
      <div>{post.date}</div> 
    </div>
  )
}

export default PostThumbnail;