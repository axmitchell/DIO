import React from 'react';
import SelectedSurfPost from './SelectedSurfPost.jsx';
import SurfReplyForm from './SurfReplyForm.jsx';
import SurfReplyPreview from './SurfReplyPreview.jsx';

const SurfReply = props => {
  const { page, currentSurfPost, userInfo, postFront, flipPost, postInfo, handlePostFormChange } = props;
  if (postInfo.id !== 0) {
    return (
      <div id='SurfReply' className='Content'>
        <SurfReplyPreview currentSurfPost={currentSurfPost} userInfo={userInfo} postFront={postFront} flipPost={flipPost} postInfo={postInfo} handlePostFormChange={handlePostFormChange}/>
        <SelectedSurfPost currentSurfPost={currentSurfPost}/>
      </div>
    )
  }
  if (page === 'SurfReplyForm') {
    return (
      <div id='SurfReply' className='Content'>
        <SurfReplyForm currentSurfPost={currentSurfPost} userInfo={userInfo} postFront={postFront} flipPost={flipPost} postInfo={postInfo} handlePostFormChange={handlePostFormChange}/>
        <SelectedSurfPost currentSurfPost={currentSurfPost}/>
      </div>
    )
  } 
  if (page === 'SurfReplyPreview') {
    return (
      <div id='SurfReply' className='Content'>
        <SurfReplyPreview currentSurfPost={currentSurfPost} userInfo={userInfo} postFront={postFront} flipPost={flipPost} postInfo={postInfo} handlePostFormChange={handlePostFormChange}/>
        <SelectedSurfPost currentSurfPost={currentSurfPost}/>
      </div>
    )
  }
}

export default SurfReply;