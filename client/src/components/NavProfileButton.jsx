import React from 'react';

const NavProfileButton = props => {
  return(
    <button id='NavProfileButton' onClick={props.handleNavButtonClick}>{props.user}</button>
  )
}

export default NavProfileButton;