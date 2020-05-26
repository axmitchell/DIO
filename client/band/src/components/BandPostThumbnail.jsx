import React from 'react';

const BandPostThumbnail = props => {
  let { post, handleAppState, handlePostViewState } = props;
  return (
    <div className='BandPostThumbnail' onClick={() => { handlePostViewState(post); handleAppState({page: 'BandPost'}) }}>
      <div>{post.location}</div>
      <div>{post.date}</div> 
    </div>
  )
}

export default BandPostThumbnail;