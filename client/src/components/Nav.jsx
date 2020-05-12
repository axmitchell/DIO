import React from 'react';

const Nav = props => {
  return(
    <div id='Nav'>
      <button id='NavProfileButton' onClick={props.handleNavButtonClick}>{props.user}</button>
      <button id='NavPostButton' onClick={props.handleNavButtonClick}>POST</button>
      <button id='NavSurfButton' onClick={props.handleNavButtonClick}>SURF</button>
      <button id='NavSearchButton' onClick={props.handleNavButtonClick}>SEARCH</button>
    </div>
  )
}

export default Nav;