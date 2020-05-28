import React from 'react';

const BandPostThumbnail = props => {
  let { post, handlePage, handlePostView } = props;
  return (
    <div className='BandPostThumbnail' onClick={() => { handlePostView(post); handlePage('BandPost') }}>
      <div>{post.location}</div>
      <div>{post.date}</div> 
    </div>
  )
}

export default BandPostThumbnail;