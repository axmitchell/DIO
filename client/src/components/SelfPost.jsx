import React from 'react';

const SelfPost = props => {
  return (
    <div id='SelfPost'>
      <div id='SelfPostInfo' className='Content'>
        <img src={props.post.image}></img>
        <div id='SelfPostMainInfo'>
          <div id='SelfPostLocation'>{props.post.location}</div>
          <div id='SelfPostDate'>{props.post.date}</div>
        </div>
        <div id='SelfPostDescription'>{props.post.description}</div>
      </div>
      <div id='SelfPostCollabsList' className='Content'>
        COLLAB THREADS GO HERE
      </div>
      {/* <SelfPostCollabsList /> */}
    </div>
  )
}

export default SelfPost;