import React from 'react';
import BandPostGallery from './BandPostGallery.jsx'
import BandPostForm from './BandPostForm.jsx';
import BandPostPreview from './BandPostPreview.jsx';
import BandPost from './BandPost.jsx';

const BandPostPage = props => {
  const { page, userInfo, postInfo, handlePostFormChange, handlePage, handlePostView} = props;
  const { posts } = userInfo;
  if (page === 'BandPostForm') {
    return(
      <BandPostForm userInfo={userInfo} postInfo={postInfo} handlePostFormChange={handlePostFormChange}/>
    )
  } else if (page === 'BandPost' || page === 'PostDrop') {
    return (
      <BandPost postInfo={postInfo}/>
    )
  } else if (page === 'BandPostPreview') {
    return (
      <BandPostPreview userInfo={userInfo} postInfo={postInfo}/>
    )
  } else {
    return (
      <BandPostGallery posts={posts} handlePage={handlePage} handlePostView={handlePostView}/>
    ) 
  }
}

export default BandPostPage