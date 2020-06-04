import React from 'react';

const SurfPost = props => {
  const { post, handleSurfGalleryState } = props;
  const { photo, name, location, link, date, description } = post;
  return (
    <div id='PostForm'>
      <button id='PreviousSet' onClick={handleSurfGalleryState}/>
      <div id='PostFormImage' className='Content'>
        <img src={photo}></img>
      </div>
      <div id='PostFormDetails' className='Content'>
        <div id='PostFormUserInfo'>
          <div id='PostFormUserInfoName'>{name}</div>
          <div id='PostFormUserInfoLocation'>({location})</div>
          <a id='PostFormUserInfoLink' href={link} target="_blank">link</a>
        </div>
        <div id='PostFormInput'>
          <div id='PostFormInputDate'>{date}</div>
          <div id='PostFormInputDescription'>{description}</div>
        </div>
      </div>
      <button id='NextSet' onClick={handleSurfGalleryState}/>
    </div>
  )
}

export default SurfPost