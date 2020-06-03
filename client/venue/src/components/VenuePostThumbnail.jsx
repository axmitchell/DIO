import React from 'react';

const VenuePostThumbnail = props => {
  let { post, handlePage, handlePostView } = props;
  return (
    <div className='VenuePostThumbnail' onClick={() => { handlePostView(post); handlePage('VenuePost') }}>
      <div>{post.user.location}</div>
      <div>{post.date}</div> 
    </div>
  )
}

export default VenuePostThumbnail;