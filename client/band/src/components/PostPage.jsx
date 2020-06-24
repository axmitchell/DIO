import React from 'react';
import PostGallery from './PostGallery.jsx'
import PostForm from './PostForm.jsx';
import PostPreview from './PostPreview.jsx';
import Post from './Post.jsx';

const PostPage = props => {
  const { page, userInfo, postInfo, handlePostFormChange, handlePage, handlePostView, connections } = props;
  const { posts } = userInfo;
  if (page === 'PostForm') {
    return(
      <PostForm userInfo={userInfo} postInfo={postInfo} handlePostFormChange={handlePostFormChange}/>
    )
  } else if (page === 'Post' || page === 'PostDrop') {
    return (
      <Post postInfo={postInfo} connections={connections} handlePage={handlePage}/>
    )
  } else if (page === 'PostPreview') {
    return (
      <PostPreview userInfo={userInfo} postInfo={postInfo}/>
    )
  } else if (page === 'PostConnection') {
    return (
      <div>HOWDY</div>
    )
  } else {
    return (
      <PostGallery posts={posts} handlePage={handlePage} handlePostView={handlePostView}/>
    ) 
  }
}

export default PostPage