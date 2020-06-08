import React from 'react';
import SurfPostFormPreview from './SurfPostFormPreview.jsx';

const SurfPostForm = props => {
  const { posts } = props;
  return(
    <div id='SurfPostForm' className='Content'>
      <div id='placeholder' className='placeholder' className='Content'>
        COMPATIBLE USER POSTS
      </div>
      <SurfPostFormPreview />
    </div>
  )
}

export default SurfPostForm;