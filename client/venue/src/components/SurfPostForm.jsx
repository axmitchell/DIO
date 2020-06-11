import React from 'react';
import SelectedSurfPost from './SelectedSurfPost.jsx';
import SurfPostFormPreview from './SurfPostFormPreview.jsx';

const SurfPostForm = props => {
  const { currentPost, userInfo } = props;
  return(
    <div id='SurfPostForm' className='Content'>
      <SurfPostFormPreview currentPost={currentPost} userInfo={userInfo}/>
      <SelectedSurfPost currentPost={currentPost}/>
    </div>
  )
}

export default SurfPostForm;