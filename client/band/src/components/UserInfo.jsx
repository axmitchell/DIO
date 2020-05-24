import React from 'react';

const UserInfo = props => {
  let hyperLinkText;
  props.userInfo.type === 'band' ? hyperLinkText = 'bandcamp' : hyperLinkText = 'link';
  return (
    <div id='UserInfo' className='Content'>
      <div id='UserInfoPhoto'>
        <img src={props.userInfo.photo}></img>
      </div>
      <div id='UserInfoMain'>
        <div id='UserInfoName'>{props.userInfo.name}</div>
        <div id='UserInfoLocation'>({props.userInfo.location})</div>
        <div id='UserInfoLink'><a href={props.userInfo.link} target="_blank">{hyperLinkText}</a></div>
      </div>
      <div id='UserInfoAbout'>{props.userInfo.about}</div>
      {/* <button id='UserInfoEditButton'>edit</button> */}
    </div>
  )
}

export default UserInfo;
