import React from 'react';

const BandPostThumbnail = props => {
  return (
    <div className='BandPostThumbnail' onClick={() => {props.handleAppState({page: 'BandPost'}); props.handleBandPostPageState(props.post)}}>
      <div>{props.post.location}</div>
      <div>{props.post.date}</div> 
    </div>
  )
}

export default BandPostThumbnail;