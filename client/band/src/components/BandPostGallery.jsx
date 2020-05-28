import React from 'react';
import BandPostThumbnail from './BandPostThumbnail.jsx'

const BandPostGallery = props => {
  if (props.posts.length === 0) {
    return (
      <div id='BandPostGallery' className='Content' style={{justifyContent: 'center', alignItems: 'center'}} >
        You have no posts
      </div>
    );
  } else {
    return (
      <div id='BandPostGallery' className='Content'>
        {props.posts.map(post => {
          return <BandPostThumbnail key={post.id} post={post}  handlePage={props.handlePage} handlePostView={props.handlePostView}/>
        })}
      </div>
    )
  }
}

export default BandPostGallery;
