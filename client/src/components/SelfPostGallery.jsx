import React from 'react';
import SelfPostThumbnail from './SelfPostThumbnail.jsx'

const SelfPostGallery = props => {
  if (props.posts.length === 0) {
    return (
      <div id='SelfPostGallery' className='Content' onClick={() => props.handleAppStateChange({page: 'SelfPostForm'})} style={{justifyContent: 'center', alignItems: 'center'}} >
        You have no posts. Click to add one.
      </div>
    );
  } else {
    return (
      <div id='SelfPostGallery' className='Content'>
        {props.posts.map(post => {
          return <SelfPostThumbnail key={post.id} post={post}  handleAppStateChange={props.handleAppStateChange} handleSelfPostPageState={props.handleSelfPostPageState}/>
        })}
        <div id='SelfPostGalleryAddButton' onClick={() => props.handleAppStateChange({page: 'SelfPostForm'})}>
          +
        </div>
      </div>
    )
  }
}

export default SelfPostGallery;
