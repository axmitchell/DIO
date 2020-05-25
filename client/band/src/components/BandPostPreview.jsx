import React from 'react';

const BandPostPreview = props => {
  const { postPhoto, postLocation, postDate, postDescription } = props.postInfo;
  return (
    <div id='BandPostForm'>
      <div id='BandPostFormImage' className='Content'>
        <img src={postPhoto}></img>
      </div>
      <div id='BandPostFormDetails' className='Content'>
        <div id='BandPostFormUserInfo'>
          <div id='BandPostFormUserInfoName'>{props.userInfo.name}</div>
          <div id='BandPostFormUserInfoLocation'>({props.userInfo.location})</div>
          <a id='BandPostFormUserInfoLink' href={props.userInfo.link} target="_blank">bandcamp</a>
        </div>
        <div id='BandPostFormInput'>
          <div id='BandPostFormInputLocation'>{postLocation}</div>
          <div id='BandPostFormInputDate'>{postDate}</div>
          <div id='BandPostFormInputDescription'>{postDescription}</div>
        </div>
      </div>
    </div>
  )
}

export default BandPostPreview;
