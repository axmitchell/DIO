import React from 'react';

const SelfPostThumbnail = props => {
  return (
    <div className='SelfPostThumbnail' onClick={() => {props.handleAppStateChange({page: 'SelfPost'}); props.handleSelfPostPageState(props.post)}}>
      <div>{props.post.location}</div>
      <div>{props.post.date}</div> 
    </div>
  )
}

export default SelfPostThumbnail;