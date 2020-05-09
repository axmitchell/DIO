import React from 'react';
import UserInfo from './UserInfo.jsx';
import UserShows from './UserShows.jsx';

const User = props => {
  return (
    <div id='User'>
      <UserInfo userInfo={props.userInfo} />
      <UserShows />
    </div>
  )
}

export default User;
