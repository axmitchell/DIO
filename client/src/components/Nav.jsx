import React from 'react';

const Nav = props => {
  let profileButtonText = props.appState.name.toUpperCase();
  let postButtonText = 'POST';
  let surfButtonText = 'SURF';
  let searchButtonText = 'SEARCH'
  if (props.appState.selectedNavButton !== '') {
    if (props.appState.selectedNavButton === 'NavProfileButton') {
      profileButtonText = 'THE SHOP';
      postButtonText = 'EDIT';
      surfButtonText = 'DELETE'
      searchButtonText = 'GO BACK'
    } else if (props.appState.selectedNavButton === 'NavPostButton') {
      profileButtonText = 'THE ARCHIVES';
      postButtonText = 'ADD';
      surfButtonText = 'FILTER';
      searchButtonText = 'GO BACK';
    } else if (props.appState.selectedNavButton === 'NavSurfButton') {
      profileButtonText = 'THE SURF';
      postButtonText = 'REPLY';
      surfButtonText = 'FILTER';
      searchButtonText = 'GO BACK';
    } else if (props.appState.selectedNavButton === 'NavSearchButton') {
      profileButtonText = 'THE WEB';
      postButtonText = '????';
      surfButtonText = 'FILTER';
      searchButtonText = 'GO BACK';
    }
  return (
    <div id='Nav'>
      <div id='NavProfileButton' className='ChangedNavProfile SelectedNavButton'>{profileButtonText}</div>
      <button id='NavPostButton' className='NavButtons' onClick={props.handleNavButtonClick}>{postButtonText}</button>
      <button id='NavSurfButton' className='NavButtons' onClick={props.handleNavButtonClick}>{surfButtonText}</button>
      <button id='NavSearchButton' className='NavButtons backButton' onClick={props.handleNavButtonClick}>{searchButtonText}</button>
    </div>
  )
}
  return(
    <div id='Nav'>
      <button id='NavProfileButton' className='ChangedNavProfile' onClick={props.handleNavButtonClick} style={{ fontSize: '45px'}}>{profileButtonText}</button>
      <button id='NavPostButton' className='NavButtons'  onClick={props.handleNavButtonClick}>{postButtonText}</button>
      <button id='NavSurfButton' className='NavButtons' onClick={props.handleNavButtonClick}>{surfButtonText}</button>
      <button id='NavSearchButton' className='NavButtons' onClick={props.handleNavButtonClick}>{searchButtonText}</button>
    </div>
  )
}

export default Nav;