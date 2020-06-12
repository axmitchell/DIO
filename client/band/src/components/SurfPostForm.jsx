import React from 'react';
import SelectedSurfPost from './SelectedSurfPost.jsx';
import SurfPostFormPreview from './SurfPostFormPreview.jsx';

const SurfPostForm = props => {
  const { currentSurfPost, userInfo, postFront, flipPost, postInfo, handlePostFormChange } = props;
  return(
    <div id='SurfPostForm' className='Content'>
      <SurfPostFormPreview currentSurfPost={currentSurfPost} userInfo={userInfo} postFront={postFront} flipPost={flipPost} postInfo={postInfo} handlePostFormChange={handlePostFormChange}/>
      <SelectedSurfPost currentSurfPost={currentSurfPost}/>
    </div>
  )
}

export default SurfPostForm;