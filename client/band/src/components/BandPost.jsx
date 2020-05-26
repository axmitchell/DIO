import React from 'react';

const BandPost = props => {
  const { postInfo } = props;
  const { postPhoto, postLocation, postDate, postDescription } = postInfo;
  return (
    <div id='BandPost'>
      <div id='BandPostInfo' className='Content'>
        <img src={postPhoto}></img>
        <div id='BandPostMainInfo'>
          <div id='BandPostLocation'>{postLocation}</div>
          <div id='BandPostDate'>{postDate}</div>
        </div>
        <div id='BandPostDescription'>{postDescription}</div>
      </div>
      <div id='BandPostCollabsList' className='Content'>
        COLLAB THREADS GO HERE
      </div>
      {/* <BandPostCollabsList /> */}
    </div>
  )
}

export default BandPost;