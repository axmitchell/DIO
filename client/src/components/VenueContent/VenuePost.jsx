import React from 'react';

const VenuePost = props => {
  return (
    <div id='VenuePost'>
      <div id='VenuePostInfo' className='Content'>
        <img src={props.post.image}></img>
        <div id='VenuePostMainInfo'>
          <div id='VenuePostLocation'>{props.post.location}</div>
          <div id='VenuePostDate'>{props.post.date}</div>
        </div>
        <div id='VenuePostDescription'>{props.post.description}</div>
      </div>
      <div id='VenuePostCollabsList' className='Content'>
        COLLAB THREADS GO HERE
      </div>
      {/* <VenuePostCollabsList /> */}
    </div>
  )
}

export default VenuePost;