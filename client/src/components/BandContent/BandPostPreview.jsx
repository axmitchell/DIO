import React from 'react';

const BandPostPreview = props => {
  const { image, location, date, description } = props.state;
  return (
    <div id='BandPostForm'>
      <div id='BandPostFormImage' className='Content'>
        <img src={image}></img>
      </div>
      <div id='BandPostFormDetails' className='Content'>
        <div id='BandPostFormUserInfo'>
          <div id='BandPostFormUserInfoName'>{props.userInfo.name}</div>
          <div id='BandPostFormUserInfoLocation'>({props.userInfo.location})</div>
          <a id='BandPostFormUserInfoLink' href={props.userInfo.link} target="_blank">bandcamp</a>
        </div>
        <div id='BandPostFormInput'>
          <div id='BandPostFormInputLocation'>{location}</div>
          <div id='BandPostFormInputDate'>{date}</div>
          <div id='BandPostFormInputDescription'>{description}</div>
        </div>
      </div>
      <div id='BandPostFormButton'>
        <button onClick={() => props.handleAppState({page: 'BandPostForm'})}>edit</button>
        <button onClick={props.handlePostSubmit}>submit</button>
      </div>
    </div>
  )
}

export default BandPostPreview;
