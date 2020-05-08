import React from 'react';

const NavPostButton = props => {
  return(
    <button id='NavPostButton' onClick={props.handleNavButtonClick}>POST</button>
  )
}

export default NavPostButton;