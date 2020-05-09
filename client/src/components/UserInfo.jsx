import React from 'react';

const UserInfo = props => {
  return (
    <div id='UserInfo' className='Content'>
      <div id='UserInfoPhoto'>
        <img src={props.userInfo.photo}></img>
      </div>
      <div id='UserInfoName'>{props.userInfo.name}</div>
      <div id='UserInfoLocation'>({props.userInfo.location})</div>
      <div id='UserInfoLink'>{props.userInfo.link}</div>
      <div id='UserInfoAbout'>{props.userInfo.about}</div>
    </div>
  )
}

export default UserInfo;
