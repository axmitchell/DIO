import React, { Component } from 'react';
import SurfPost from './SurfPost.jsx';
import SurfPostForm from './SurfPostForm.jsx';

const SurfPage = props => {
  const { page, userInfo, handlePostFormChange, postInfo, currentSurfPost, otherUserPosts, handleSurfPostView, postFront, flipPost } = props;
  const { surfPostPhoto, surfPostName, surfPostLocation, surfPostUserLocation, surfPostLink, surfPostDate, surfPostDescription } = currentSurfPost;
  if (page === '') {
    if (otherUserPosts.length === 0) {
      return (
        <div id='SurfPage' className='Content' style={{width: '90%', height: '80%'}}>
          NO USER POSTS JUST YET
        </div>
      )
    } else {
      return (
        <SurfPost key={surfPostLink + surfPostDate} currentSurfPost={currentSurfPost} handleSurfPostView={handleSurfPostView} userInfo={userInfo}/>
      )
    }
  }
  if (page === 'SurfPostForm') {
    return (
        <SurfPostForm currentSurfPost={currentSurfPost} userInfo={userInfo} postFront={postFront} flipPost={flipPost} postInfo={postInfo} handlePostFormChange={handlePostFormChange}/>
    )
  }
}

export default SurfPage;
