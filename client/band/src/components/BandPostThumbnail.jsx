import React from 'react';

const BandPostThumbnail = props => {
  let { post, handlePage, handlePostViewState } = props;
  return (
    <div className='BandPostThumbnail' onClick={() => { handlePostViewState(post); handlePage('BandPost') }}>
      <div>{post.location}</div>
      <div>{post.date}</div> 
    </div>
  )
}

export default BandPostThumbnail;