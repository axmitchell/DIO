import React from 'react';
import UserInfo from './UserInfo.jsx';
import UserShows from './UserShows.jsx';

const UserPage = props => {
  return (
    <div id='UserPage'>
      <UserInfo userInfo={props.userInfo} />
      <UserShows />
    </div>
  )
}

export default UserPage;
