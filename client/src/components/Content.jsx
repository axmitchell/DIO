import React from 'react';
import HomePage from './HomePage.jsx';
import UserPage from './UserPage.jsx';
import PostGallery from './PostGallery.jsx';
import Users from './Users.jsx';
import BandPostPage from './BandContent/BandPostPage.jsx';
import VenuePostPage from './VenueContent/VenuePostPage.jsx';

const Content = props => {
  const { selectedNavButton, userInfo, page, handleAppState } = props;
  let content
  switch (selectedNavButton) {
    case '':
      content = <HomePage />
      break;
    case 'NavProfileButton':
      content = <UserPage userInfo={userInfo} page={page}/>
      break;
    case 'NavPostButton':

      if (userInfo.type === 'band') {
        content = <BandPostPage userInfo={userInfo} handleAppState={handleAppState} page={page}/>

      } else if (userInfo.type === 'venue') {
        content =  <VenuePostPage userInfo={userInfo} handleAppState={handleAppState} page={page}/>
      }
      break;
    case 'NavSurfButton':
      content = <PostGallery />
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