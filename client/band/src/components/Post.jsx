import React from 'react';
import ConnectionsGallery from './ConnectionsGallery.jsx';

const Post = props => {
  const { postInfo, connections, handlePage } = props;
  const { postId, postPhoto, postLocation, postDate, postDescription } = postInfo;
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
      < ConnectionsGallery handlePage={handlePage} connections={connections} postId={postId}/>
    </div>
  )
}

export default Post;