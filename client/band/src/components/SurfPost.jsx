import React from 'react';

const SurfPost = props => {
  const { currentSurfPost, handleSurfPostView } = props;
  const { surfPostPhoto, surfPostName, surfPostLocation, surfPostLink, surfPostDate, surfPostDescription } = currentSurfPost;
  return (
    <div id='PostForm'>
      <button id='PreviousSet' onClick={handleSurfPostView}/>
      <div id='PostFormImage' className='Content'>
        <img src={surfPostPhoto}></img>
      </div>
      <div id='PostFormDetails' className='Content'>
        <div id='PostFormUserInfo'>
          <a id='PostFormUserInfoName' href={surfPostLink} target="_blank">{surfPostName}</a>
          <div id='PostFormUserInfoLocation'>({surfPostLocation})</div>
        </div>
        <div id='PostFormInput'>
          <div id='PostFormInputDate'>{surfPostDate}</div>
          <div id='PostFormInputDescription'>{surfPostDescription}</div>
        </div>
      </div>
      <button id='NextSet' onClick={handleSurfPostView}/>
    </div>
  )
}

export default SurfPost