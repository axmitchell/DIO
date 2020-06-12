import React from 'react';

const SelectedSurfPost = props => {
  const { currentSurfPost } = props;
  const { surfPostPhoto, surfPostName, surfPostLocation, surfPostUserLocation, surfPostLink, surfPostDate, surfPostDescription } = currentSurfPost;
  return(
    <div id='SelectedSurfPost'>      
      <div id='SurfPostDetails' className='SelectedSurfPost'>
        <div id='SurfPostUserInfo'>
          <a id='SurfPostUserInfoName' href={surfPostLink} target="_blank">{surfPostName}</a>
          <div id='SurfPostUserInfoLocation'>({surfPostUserLocation})</div>
        </div>
        <div id='SurfPostInput'>
          <div id='SurfPostInputLocation'>{surfPostLocation}</div>
          <div id='SurfPostInputDate'>{surfPostDate}</div>
          <div id='SurfPostInputDescription'>{surfPostDescription}</div>
        </div>
      </div>
    </div>
  )
}

export default SelectedSurfPost;