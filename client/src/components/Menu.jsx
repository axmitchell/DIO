import React from 'react';
import ProfileButton from './ProfileButton.jsx';
import PostButton from './PostButton.jsx';
import SurfButton from './SurfButton.jsx';
import SearchButton from './SearchButton.jsx';

const Menu = props => {
  return(
    <div className='menu'>
      <ProfileButton handleMenuButtonClick={props.handleMenuButtonClick}/>
      <PostButton handleMenuButtonClick={props.handleMenuButtonClick}/>
      <SurfButton handleMenuButtonClick={props.handleMenuButtonClick}/>
      <SearchButton handleMenuButtonClick={props.handleMenuButtonClick}/>
    </div>
  )
}

export default Menu;