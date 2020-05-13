import React from 'react';

const VenuePostPreview = props => {
  const { image, location, date, description } = props.state;
  return (
    <div id='VenuePostForm'>
      <div id='VenuePostFormImage' className='Content'>
        <img src={image}></img>
      </div>
      <div id='VenuePostFormDetails' className='Content'>
        <div id='VenuePostFormUserInfo'>
          <div id='VenuePostFormUserInfoName'>{props.userInfo.name}</div>
          <div id='VenuePostFormUserInfoLocation'>({props.userInfo.location})</div>
          <a id='VenuePostFormUserInfoLink' href={props.userInfo.link} target="_blank">bandcamp</a>
        </div>
        <div id='VenuePostFormInput'>
          <div id='VenuePostFormInputLocation'>{location}</div>
          <div id='VenuePostFormInputDate'>{date}</div>
          <div id='VenuePostFormInputDescription'>{description}</div>
        </div>
      </div>
      <div id='VenuePostFormButton'>
        <button onClick={() => props.handleAppState({page: 'VenuePostForm'})}>edit</button>
        <button onClick={props.handlePostSubmit}>submit</button>
      </div>
    </div>
  )
}

export default VenuePostPreview;
