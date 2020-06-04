import React from 'react';

const Post = props => {
  const { postInfo } = props;
  const { postPhoto, postLocation, postDate, postDescription } = postInfo;
  return (
    <div id='Post'>
      <div id='PostInfo' className='Content'>
        <img src={postPhoto}></img>
        <div id='PostMainInfo'>
          <div id='PostLocation'>{postLocation}</div>
          <div id='PostDate'>{postDate}</div>
        </div>
        <div id='PostDescription'>{postDescription}</div>
      </div>
      <div id='PostCollabsList' className='Content'>
        COLLAB THREADS GO HERE
      </div>
      {/* <PostCollabsList /> */}
    </div>
  )
}

export default Post;