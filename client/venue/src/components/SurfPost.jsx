import React from 'react';

const SurfPost = props => {
  const { post, handlePostGalleryState } = props;
  const { photo, name, location, link, date, description, userLocation } = post;
  return (
    <div id='VenuePostForm'>
      <button id='PreviousSet' onClick={handlePostGalleryState}/>
      <div id='VenuePostFormImage' className='Content'>
        <img src={photo}></img>
      </div>
      <div id='VenuePostFormDetails' className='Content'>
        <div id='VenuePostFormUserInfo'>
          <div id='VenuePostFormUserInfoName'>{name}</div>
          <div id='VenuePostFormUserInfoLocation'>({userLocation})</div>
          <a id='VenuePostFormUserInfoLink' href={link} target="_blank">link</a>
        </div>
        <div id='VenuePostFormInput'>
          <div id='VenuePostFormInputLocation'>{location}</div>
          <div id='VenuePostFormInputDate'>{date}</div>
          <div id='VenuePostFormInputDescription'>{description}</div>
        </div>
      </div>
      <button id='NextSet' onClick={handlePostGalleryState}/>
    </div>
  )
}

export default SurfPost