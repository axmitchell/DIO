import React from 'react';
import HomePage from './HomePage.jsx';
import UserPage from './UserPage.jsx';
import PostGallery from './PostGallery.jsx';
import Users from './Users.jsx';
import BandPostPage from './BandPostPage.jsx';

const Content = props => {
  const { selectedNavButton, userInfo, page, handlePage, handlePostFormChange, postInfo, handlePostSubmit, handlePostViewState } = props;
  let content
  switch (selectedNavButton) {
    case '':
      content = <HomePage />
      break;
    case 'NavProfileButton':
      content = <UserPage userInfo={userInfo} page={page}/>
      break;
    case 'NavPostButton':
      content = <BandPostPage userInfo={userInfo} handlePage={handlePage} page={page} handlePostFormChange={handlePostFormChange} postInfo={postInfo} handlePostSubmit={handlePostSubmit} handlePostViewState={handlePostViewState}/>
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