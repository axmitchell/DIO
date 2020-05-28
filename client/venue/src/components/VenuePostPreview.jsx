import React from 'react';

const VenuePostPreview = props => {
  const { postPhoto, postLocation, postDate, postDescription } = props.postInfo;
  return (
    <div id='VenuePostForm'>
      <div id='VenuePostFormImage' className='Content'>
        <img src={postPhoto}></img>
      </div>
      <div id='VenuePostFormDetails' className='Content'>
        <div id='VenuePostFormUserInfo'>
          <div id='VenuePostFormUserInfoName'>{props.userInfo.name}</div>
          <div id='VenuePostFormUserInfoLocation'>({props.userInfo.location})</div>
          <a id='VenuePostFormUserInfoLink' href={props.userInfo.link} target="_blank">link</a>
        </div>
        <div id='VenuePostFormInput'>
          <div id='VenuePostFormInputLocation'>{postLocation}</div>
          <div id='VenuePostFormInputDate'>{postDate}</div>
          <div id='VenuePostFormInputDescription'>{postDescription}</div>
        </div>
      </div>
    </div>
  )
}

export default VenuePostPreview;
