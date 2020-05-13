import React from 'react';
import BandPostThumbnail from './BandPostThumbnail.jsx'

const BandPostGallery = props => {
  if (props.posts.length === 0) {
    return (
      <div id='PostGallery' className='Content' onClick={() => props.handleAppState({page: 'BandPostForm'})} style={{justifyContent: 'center', alignItems: 'center'}} >
        You have no posts. Click to add one.
      </div>
    );
  } else {
    return (
      <div id='PostGallery' className='Content'>
        {props.posts.map(post => {
          return <BandPostThumbnail key={post.id} post={post}  handleAppState={props.handleAppState} handleBandPostPageState={props.handleBandPostPageState}/>
        })}
        <div id='BandPostGalleryAddButton' onClick={() => props.handleAppState({page: 'BandPostForm'})}>
          +
        </div>
      </div>
    )
  }
}

export default BandPostGallery;
