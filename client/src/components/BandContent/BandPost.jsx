import React from 'react';

const BandPost = props => {
  return (
    <div id='BandPost'>
      <div id='BandPostInfo' className='Content'>
        <img src={props.post.image}></img>
        <div id='BandPostMainInfo'>
          <div id='BandPostLocation'>{props.post.location}</div>
          <div id='BandPostDate'>{props.post.date}</div>
        </div>
        <div id='BandPostDescription'>{props.post.description}</div>
      </div>
      <div id='BandPostCollabsList' className='Content'>
        COLLAB THREADS GO HERE
      </div>
      {/* <BandPostCollabsList /> */}
    </div>
  )
}

export default BandPost;