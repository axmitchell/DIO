import React from 'react';

const VenuePostThumbnail = props => {
  return (
    <div className='VenuePostThumbnail' onClick={() => {props.handleAppState({page: 'VenuePost'}); props.handleVenuePostPageState(props.post)}}>
      <div>{props.post.date}</div> 
    </div>
  )
}

export default VenuePostThumbnail;