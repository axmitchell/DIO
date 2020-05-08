import React from 'react';
import NavProfileButton from './NavProfileButton.jsx';
import NavPostButton from './NavPostButton.jsx';
import NavSurfButton from './NavSurfButton.jsx';
import NavSearchButton from './NavSearchButton.jsx';

const Nav = props => {
  return(
    <div id='Nav'>
      <NavProfileButton handleNavButtonClick={props.handleNavButtonClick} user={props.user}/>
      <NavPostButton handleNavButtonClick={props.handleNavButtonClick}/>
      <NavSurfButton handleNavButtonClick={props.handleNavButtonClick}/>
      <NavSearchButton handleNavButtonClick={props.handleNavButtonClick}/>
    </div>
  )
}

export default Nav;