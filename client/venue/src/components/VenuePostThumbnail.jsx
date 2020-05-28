import React from 'react';

const VenuePostThumbnail = props => {
  let { post, handlePage, handlePostViewState } = props;
  return (
    <div className='VenuePostThumbnail' onClick={() => { handlePostViewState(post); handlePage('VenuePost') }}>
      <div>{post.location}</div>
      <div>{post.date}</div> 
    </div>
  )
}

export default VenuePostThumbnail;