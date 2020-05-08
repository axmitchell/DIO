import React from 'react';
import Home from './Home.jsx';
import User from './User.jsx';
import SelfPostGallery from './SelfPostGallery.jsx'
import PostGallery from './PostGallery.jsx';
import Users from './Users.jsx';

const Content = props => {
  if (props.selectedNavButton === '') {
    return(
      <div id='Content'>
        <Home />
      </div>
    )
  } else if (props.selectedNavButton === 'NavProfileButton') {
    return(
      <div id='Content'>
        <User />
      </div>
    )
  } else if (props.selectedNavButton === 'NavPostButton') {
    return (
      <div id='Content'>
        <SelfPostGallery />
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