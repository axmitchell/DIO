import React from 'react';
import HomePage from './HomePage.jsx';
import UserPage from './UserPage.jsx';
import SurfPage from './SurfPage.jsx';
import Users from './Users.jsx';
import PostPage from './PostPage.jsx';

const Content = props => {
  const { selectedNavButton, userInfo, page, handlePage, handlePostFormChange, postInfo, handlePostSubmit, handlePostView } = props;
  let content
  switch (selectedNavButton) {
    case '':
      content = <HomePage />
      break;
    case 'NavProfileButton':
      content = <UserPage userInfo={userInfo} page={page}/>
      break;
    case 'NavPostButton':
      content = <PostPage userInfo={userInfo} handlePage={handlePage} page={page} handlePostFormChange={handlePostFormChange} postInfo={postInfo} handlePostSubmit={handlePostSubmit} handlePostView={handlePostView}/>
      break;
    case 'NavSurfButton':
      content = <SurfPage page={page}/>
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