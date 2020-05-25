import React from 'react';

const Nav = props => {
  let profileButtonText = props.appState.name.toUpperCase();
  if (props.appState.selectedNavButton !== '') {
    if (props.appState.selectedNavButton === 'NavProfileButton') {
      return (
        <div id='Nav'>
          <div id='NavProfileButton' className='ChangedNavProfile SelectedNavButton'>THE SHOP</div>
          <button id='NavPostButton' className='NavButtons' style={{justifyContent: 'flex-end'}}  onClick={() => alert('Edit Profile')}>EDIT</button>
          <button id='NavSurfButton' className='NavButtons' style={{justifyContent: 'flex-end'}}  onClick={() => alert('Delete Profile')}>DELETE</button>
          <button id='NavSearchButton' className='NavButtons backButton' onClick={props.handleNavButtonClick}>{'< - - -'}</button>
        </div>
      )
    } else if (props.appState.selectedNavButton === 'NavPostButton') {
      let postPage = 'BandPostForm';
      if (props.appState.page.indexOf('PostForm') !== -1) {
        postPage = 'BandPostPreview'
        return (
          <div id='Nav'>
            <div id='NavProfileButton' className='ChangedNavProfile SelectedNavButton'>THE ARCHIVES</div>
            <button id='NavPostButton' className='NavButtons' style={{justifyContent: 'flex-end'}}  onClick={() => props.handleAppState({page: postPage})}>PREVIEW</button>
            <button id='NavSurfButton' className='NavButtons' style={{justifyContent: 'flex-end'}}  onClick={props.handleNavButtonClick}>SAVE</button>
            <button id='NavSearchButton' className='NavButtons backButton' onClick={props.handleNavButtonClick}>{'< - - -'}</button>
          </div>
        )
      } else if (props.appState.page.indexOf('PostPreview') !== -1) {
        return (
          <div id='Nav'>
            <div id='NavProfileButton' className='ChangedNavProfile SelectedNavButton'>THE ARCHIVES</div>
            <button id='NavPostButton' className='NavButtons' style={{justifyContent: 'flex-end'}} onClick={() => props.handleAppState({page: 'BandPostForm'})}>EDIT</button>
            <button id='NavSurfButton' className='NavButtons' style={{justifyContent: 'flex-end'}} onClick={props.handleNavButtonClick}>SAVE</button>
            <button id='NavSearchButton' className='NavButtons backButton' onClick={props.handleNavButtonClick}>{'< - - -'}</button>
          </div>
        )
      }
      return (
        <div id='Nav'>
          <div id='NavProfileButton' className='ChangedNavProfile SelectedNavButton'>THE ARCHIVES</div>
          <button id='NavPostButton' className='NavButtons' style={{justifyContent: 'flex-end'}} onClick={() => props.handleAppState({page: postPage})}>ADD</button>
          <button id='NavSurfButton' className='NavButtons' style={{justifyContent: 'flex-end'}} onClick={props.handleNavButtonClick}>FILTER</button>
          <button id='NavSearchButton' className='NavButtons backButton' onClick={props.handleNavButtonClick}>{'< - - -'}</button>
        </div>
      )
    } else if (props.appState.selectedNavButton === 'NavSurfButton') {
      return (
        <div id='Nav'>
          <div id='NavProfileButton' className='ChangedNavProfile SelectedNavButton'>THE SURF</div>
          <button id='NavPostButton' className='NavButtons' style={{justifyContent: 'flex-end'}}  onClick={props.handleNavButtonClick}>REPLY</button>
          <button id='NavSurfButton' className='NavButtons' style={{justifyContent: 'flex-end'}}  onClick={props.handleNavButtonClick}>FILTER</button>
          <button id='NavSearchButton' className='NavButtons backButton' onClick={props.handleNavButtonClick}>{'< - - -'}</button>
        </div>
      )
    } else if (props.appState.selectedNavButton === 'NavSearchButton') {
      return (
        <div id='Nav'>
          <div id='NavProfileButton' className='ChangedNavProfile SelectedNavButton'>THE WEB</div>
          <button id='NavPostButton' className='NavButtons' style={{justifyContent: 'flex-end'}}  onClick={props.handleNavButtonClick}>????</button>
          <button id='NavSurfButton' className='NavButtons' style={{justifyContent: 'flex-end'}}  onClick={props.handleNavButtonClick}>FILTER</button>
          <button id='NavSearchButton' className='NavButtons backButton' onClick={props.handleNavButtonClick}>{'< - - -'}</button>
        </div>
      )
    }
  }
  return(
    <div id='Nav'>
      <button id='NavProfileButton' className='ChangedNavProfile' onClick={props.handleNavButtonClick} style={{ fontSize: '45px'}}>{profileButtonText}</button>
      <button id='NavPostButton' className='NavButtons'  onClick={props.handleNavButtonClick}>POST</button>
      <button id='NavSurfButton' className='NavButtons' onClick={props.handleNavButtonClick}>SURF</button>
      <button id='NavSearchButton' className='NavButtons' onClick={props.handleNavButtonClick}>SEARCH</button>
    </div>
  )
}

export default Nav;