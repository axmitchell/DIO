import React from 'react';
import PostConnectionChat from './PostConnectionChat.jsx';
import PostConnectionInfo from './PostConnectionInfo.jsx';

const PostConnection = props => {
  return (
    <div id='PostConnection'>
      <PostConnectionChat />
      <PostConnectionInfo />
    </div>
  )
}

export default PostConnection;