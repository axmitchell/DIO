import React from 'react';

const SurfPost = props => {
  const { currentSurfPost, handleSurfPostView } = props;
  const { surfPostPhoto, surfPostName, surfPostLocation, surfPostUserLocation, surfPostLink, surfPostDate, surfPostDescription } = currentSurfPost;
  return (
    <div id='SurfPost'>
      <button id='PreviousSet' onClick={handleSurfPostView}/>
      <div id='SurfPostImage' className='Content'>
        <img src={surfPostPhoto}></img>
      </div>
      <div id='SurfPostDetails' className='Content'>
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
      <button id='NextSet' onClick={handleSurfPostView}/>
    </div>
  )
}

export default SurfPost