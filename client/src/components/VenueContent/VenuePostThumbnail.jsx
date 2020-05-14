import React from 'react';

const VenuePostThumbnail = props => {
  if (props.type === 'band') {
    return (
      <div className='VenuePostThumbnail' onClick={() => {props.handleAppState({page: 'VenuePost'}); props.handleVenuePostPageState(props.post)}}>
        <div>{props.post.location}</div>
        <div>{props.post.date}</div> 
      </div>
    )
  } else {
    return (
      <div className='VenuePostThumbnail' onClick={() => {props.handleAppState({page: 'VenuePost'}); props.handleVenuePostPageState(props.post)}}>
        <div>{props.post.date}</div> 
      </div>
    )
  }
}

export default VenuePostThumbnail;