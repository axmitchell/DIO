import React from 'react';
import VenuePostThumbnail from './VenuePostThumbnail.jsx'

const VenuePostGallery = props => {
  if (props.posts.length === 0) {
    return (
      <div id='VenuePostGallery' className='Content' style={{justifyContent: 'center', alignItems: 'center'}} >
        You have no posts
      </div>
    );
  } else {
    return (
      <div id='VenuePostGallery' className='Content'>
        {props.posts.map(post => {
          return <VenuePostThumbnail key={post.id} post={post}  handleAppState={props.handleAppState} handlePostViewState={props.handlePostViewState}/>
        })}
      </div>
    )
  }
}

export default VenuePostGallery;
