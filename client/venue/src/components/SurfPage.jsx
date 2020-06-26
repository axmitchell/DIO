import React, { Component } from 'react';
import SurfPost from './SurfPost.jsx';
import SurfReply from './SurfReply.jsx';

const SurfPage = props => {
  const { windowSize, page, userInfo, handlePostFormChange, postInfo, currentSurfPost, otherUserPosts, handleSurfPostView, postFront, flipPost, handlePostView } = props;
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
        <SurfPost windowSize={windowSize} key={surfPostLink + surfPostDate} currentSurfPost={currentSurfPost} handleSurfPostView={handleSurfPostView} userInfo={userInfo} flipPost={flipPost} postFront={postFront}/>
      )
    }
  }
  if (page === 'SurfReplyForm' || page === 'SurfReplyPreview') {
    return (
        <SurfReply windowSize={windowSize} page={page} currentSurfPost={currentSurfPost} handlePostView={handlePostView} userInfo={userInfo} postFront={postFront} flipPost={flipPost} postInfo={postInfo} handlePostFormChange={handlePostFormChange}/>
    )
  }
}

export default SurfPage;
