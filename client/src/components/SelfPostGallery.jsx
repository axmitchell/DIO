import React from 'react';

const SelfPostGallery = props => {
  if (props.posts.length === 0) {
    return (
      <div id='SelfPostGallery' className='Content' onClick={() => props.handlePageChange('PostForm')} style={{justifyContent: 'center', alignItems: 'center'}} >
        You have no posts. Click to add one.
      </div>
    );
  } else {
    return (
      <div id='SelfPostGallery' className='Content'>
        YOU GOT POSTS BOYYYYY
        {/* <div id='SelfPostGalleryAddButton'>
          +
        </div> */}
      </div>
    )
  }
}

export default SelfPostGallery;
