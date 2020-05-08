import React from 'react';

const NavSearchButton = props => {
  return(
    <button id='NavSearchButton' onClick={props.handleNavButtonClick}>SEARCH</button>
  )
}

export default NavSearchButton;