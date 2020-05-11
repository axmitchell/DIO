import React from 'react';

const SelfPostThumbnail = props => {
  return (
    <div className='SelfPostThumbnail' onClick={() => {props.handleAppStateChange({page: 'SelfPost'})}}>
      <div>{props.post.location}</div>
      <div>{props.post.date}</div> 
    </div>
  )
}

export default SelfPostThumbnail;