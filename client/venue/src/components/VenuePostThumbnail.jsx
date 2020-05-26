import React from 'react';

const VenuePostThumbnail = props => {
  let { post, handleAppState, handlePostViewState } = props;
  return (
    <div className='VenuePostThumbnail' onClick={() => { handlePostViewState(post); handleAppState({page: 'VenuePost'}) }}>
      <div>{post.location}</div>
      <div>{post.date}</div> 
    </div>
  )
}

export default VenuePostThumbnail;