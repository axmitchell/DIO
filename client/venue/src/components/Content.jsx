import React from 'react';
import HomePage from './HomePage.jsx';
import UserPage from './UserPage.jsx';
import PostGallery from './PostGallery.jsx';
import Users from './Users.jsx';
import VenuePostPage from './VenuePostPage.jsx';

const Content = props => {
  const { selectedNavButton, userInfo, page, handleAppState, handlePostFormChange, postInfo, handlePostSubmit, handlePostViewState } = props;
  let content
  switch (selectedNavButton) {
    case '':
      content = <HomePage />
      break;
    case 'NavProfileButton':
      content = <UserPage userInfo={userInfo} page={page}/>
      break;
    case 'NavPostButton':
      content = <VenuePostPage userInfo={userInfo} handleAppState={handleAppState} page={page} handlePostFormChange={handlePostFormChange} postInfo={postInfo} handlePostSubmit={handlePostSubmit} handlePostViewState={handlePostViewState}/>
      break;
    case 'NavSurfButton':
      content = <PostGallery/>
      break;
    case 'NavSearchButton':
      content = <Users />
  }
  return (
    <div id='Content'>
      {content}
    </div>
  )
}

export default Content;