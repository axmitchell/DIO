import React from 'react';

const BandPostThumbnail = props => {
  let { post, handleAppState, handleBandPostPageState } = props;
  return (
    <div className='BandPostThumbnail' onClick={() => {handleAppState({page: 'BandPost'}); handleBandPostPageState(post)}}>
      <div>{post.location}</div>
      <div>{post.date}</div> 
    </div>
  )
}

export default BandPostThumbnail;