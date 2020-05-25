import React from 'react';

const SurfPost = props => {
  const { post, handlePostGalleryState } = props;
  const { photo, name, location, link, date, description } = post;
  return (
    <div id='BandPostForm'>
      <button id='PreviousSet' onClick={handlePostGalleryState}/>
      <div id='BandPostFormImage' className='Content'>
        <img src={photo}></img>
      </div>
      <div id='BandPostFormDetails' className='Content'>
        <div id='BandPostFormUserInfo'>
          <div id='BandPostFormUserInfoName'>{name}</div>
          <div id='BandPostFormUserInfoLocation'>({location})</div>
          <a id='BandPostFormUserInfoLink' href={link} target="_blank">link</a>
        </div>
        <div id='BandPostFormInput'>
          <div id='BandPostFormInputDate'>{date}</div>
          <div id='BandPostFormInputDescription'>{description}</div>
        </div>
      </div>
      <button id='NextSet' onClick={handlePostGalleryState}/>
    </div>
  )
}

export default SurfPost