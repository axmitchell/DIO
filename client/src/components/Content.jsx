import React from 'react';
import HomePage from './HomePage.jsx';
import User from './User.jsx';
import PostGallery from './PostGallery.jsx';
import Users from './Users.jsx';
import SelfPostPage from './SelfPostPage.jsx';

const Content = props => {
  if (props.selectedNavButton === '') {
    return(
      <div id='Content'>
        <HomePage />
      </div>
    )
  } else if (props.selectedNavButton === 'NavProfileButton') {
    return(
      <div id='Content'>
        <User userInfo={props.userInfo} />
      </div>
    )
  } else if (props.selectedNavButton === 'NavPostButton') {
      return (
        <div id='Content'>
          <SelfPostPage userInfo={props.userInfo} handleAppStateChange={props.handleAppStateChange} page={props.page} posts={props.posts}/>
        </div>
      )
  } else if (props.selectedNavButton === 'NavSurfButton') {
    return(
      <div id='Content'>
        <PostGallery />
      </div>
    )
  } else if (props.selectedNavButton === 'NavSearchButton') {
    return (
      <div id='Content'>
        <Users />
      </div>
    )
  }
}

export default Content;