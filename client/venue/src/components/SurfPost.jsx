import React from 'react';

const SurfPost = props => {
  const { windowSize, currentSurfPost, handleSurfPostView, postFront, flipPost } = props;
  const { surfPostPhoto, surfPostName, surfPostLocation, surfPostUserLocation, surfPostLink, surfPostDate, surfPostDescription } = currentSurfPost;
  if (windowSize < 1400) {
    if (postFront) {
      return (
        <div id='SurfPost'>
          <button id='PreviousSet' onClick={handleSurfPostView}/>
          <div id='SurfPostImage' className='Content' onClick={flipPost}>
            <img src={surfPostPhoto}></img>
          </div>
          <button id='NextSet' onClick={handleSurfPostView}/>
        </div>
      )
    } 
    if (!postFront) {
      return (
        <div id='SurfPost'>
          <button id='PreviousSet' onClick={handleSurfPostView}/>
          <div id='SurfPostDetails' className='Content' onClick={flipPost}>
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
  } else {
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
}

export default SurfPost