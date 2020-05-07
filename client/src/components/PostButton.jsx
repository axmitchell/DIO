import React from 'react';

const PostButton = props => {
  return(
    <button id='PostButton' onClick={props.handleMenuButtonClick}>POST</button>
  )
}

export default PostButton;