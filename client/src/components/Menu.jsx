import React from 'react';
import ProfileButton from './ProfileButton.jsx';
import PostButton from './PostButton.jsx';
import SurfButton from './SurfButton.jsx';
import SearchButton from './SearchButton.jsx';

const Menu = props => {
  return(
    <div className='menu'>
      <ProfileButton />
      <PostButton />
      <SurfButton />
      <SearchButton />
    </div>
  )
}

export default Menu;