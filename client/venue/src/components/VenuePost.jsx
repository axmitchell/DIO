import React from 'react';

const VenuePost = props => {
  const { postInfo } = props;
  const { postPhoto, postLocation, postDate, postDescription } = postInfo;
  return (
    <div id='VenuePost'>
      <div id='VenuePostInfo' className='Content'>
        <img src={postPhoto}></img>
        <div id='VenuePostMainInfo'>
          <div id='VenuePostLocation'>{postLocation}</div>
          <div id='VenuePostDate'>{postDate}</div>
        </div>
        <div id='VenuePostDescription'>{postDescription}</div>
      </div>
      <div id='VenuePostCollabsList' className='Content'>
        COLLAB THREADS GO HERE
      </div>
      {/* <VenuePostCollabsList /> */}
    </div>
  )
}

export default VenuePost;