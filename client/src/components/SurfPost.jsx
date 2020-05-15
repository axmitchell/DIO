import React from 'react';

const SurfPost = props => {
  const { post } = props;
  const { photo, name, location, link, date, description } = post;
  return (
    <div id='VenuePostForm'>
      <div id='VenuePostFormImage' className='Content'>
        <img src={photo}></img>
      </div>
      <div id='VenuePostFormDetails' className='Content'>
        <div id='VenuePostFormUserInfo'>
          <div id='VenuePostFormUserInfoName'>{name}</div>
          <div id='VenuePostFormUserInfoLocation'>({location})</div>
          <a id='VenuePostFormUserInfoLink' href={link} target="_blank">link</a>
        </div>
        <div id='VenuePostFormInput'>
          <div id='VenuePostFormInputDate'>{date}</div>
          <div id='VenuePostFormInputDescription'>{description}</div>
        </div>
      </div>
    </div>
  )
}

export default SurfPost