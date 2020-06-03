import React from 'react';

const SurfPost = props => {
  const { post, handlePostGalleryState } = props;
  const { photo, name, location, link, date, description, userLocation } = post;
  return (
    <div id='SurfPost'>
      <button id='PreviousSet' onClick={handlePostGalleryState}/>
      <div id='SurfPostImage' className='Content'>
        <img src={photo}></img>
      </div>
      <div id='SurfPostDetails' className='Content'>
        <div id='SurfPostUserInfo'>
          <div id='SurfPostUserInfoName'>{name}</div>
          <div id='SurfPostUserInfoLocation'>({userLocation})</div>
          <a id='SurfPostUserInfoLink' href={link} target="_blank">link</a>
        </div>
        <div id='SurfPostInput'>
          <div id='SurfPostInputLocation'>{location}</div>
          <div id='SurfPostInputDate'>{date}</div>
          <div id='SurfPostInputDescription'>{description}</div>
        </div>
      </div>
      <button id='NextSet' onClick={handlePostGalleryState}/>
    </div>
  )
}

export default SurfPost