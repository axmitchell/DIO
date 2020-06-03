import React from 'react';
import VenuePostGallery from './VenuePostGallery.jsx'
import VenuePostForm from './VenuePostForm.jsx';
import VenuePostPreview from './VenuePostPreview.jsx';
import VenuePost from './VenuePost.jsx';

const VenuePostPage = props => {
  const { page, userInfo, postInfo, handlePostFormChange, handlePage, handlePostView} = props;
  const { posts } = userInfo;
  if (page === 'VenuePostForm') {
    return(
      <VenuePostForm userInfo={userInfo} handlePage={handlePage} postInfo={postInfo} handlePostFormChange={handlePostFormChange}/>
    )
  } else if (page === 'VenuePost' || page === 'PostDrop') {
    return (
      <VenuePost postInfo={postInfo}/>
    )
  } else if (page === 'VenuePostPreview') {
    return (
      <VenuePostPreview userInfo={userInfo} postInfo={postInfo}/>
    )
  } else {
    return (
      <VenuePostGallery posts={posts} handlePage={handlePage} handlePostView={handlePostView}/>
    ) 
  }
}

export default VenuePostPage