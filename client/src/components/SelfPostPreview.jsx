import React from 'react';

const SelfPostPreview = props => {
  const { image, location, date, description } = props.state;
  return (
    <div id='SelfPostForm'>
      <div id='SelfPostFormImage' className='Content'>
        <img src={image}></img>
      </div>
      <div id='SelfPostFormDetails' className='Content'>
        <div id='SelfPostFormUserInfo'>
          <div id='SelfPostFormUserInfoName'>{props.userInfo.name}</div>
          <div id='SelfPostFormUserInfoLocation'>({props.userInfo.location})</div>
          <a id='SelfPostFormUserInfoLink' href={props.userInfo.link} target="_blank">bandcamp</a>
        </div>
        <div id='SelfPostFormInput'>
          <div id='SelfPostFormInputLocation'>{location}</div>
          <div id='SelfPostFormInputDate'>{date}</div>
          <div id='SelfPostFormInputDescription'>{description}</div>
        </div>
      </div>
      <div id='SelfPostFormButton'>
        <button onClick={() => props.handlePageChange('SelfPostForm')}>edit</button>
        <button onClick={props.handlePostSubmit}>submit</button>
      </div>
    </div>
  )
}

export default SelfPostPreview;
