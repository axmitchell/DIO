import React from 'react';

const Nav = props => {
  const { name, selectedNavButton, page } = props.appState
  let profileButtonText = name.toUpperCase();
  if (selectedNavButton === '') {
    return(
      <div id='Nav'>
        <button id='NavProfileButton' className='ChangedNavProfile mainButtons' onClick={props.handleNavButtonClick} style={{ fontSize: '45px'}}>{profileButtonText}</button>
        <button id='NavPostButton' className='NavButtons mainButtons'  onClick={props.handleNavButtonClick}>POST</button>
        <button id='NavSurfButton' className='NavButtons mainButtons' onClick={props.handleNavButtonClick}>SURF</button>
        <button id='NavSearchButton' className='NavButtons mainButtons' onClick={props.handleNavButtonClick}>SEARCH</button>
      </div>
    )
  } 
  if (selectedNavButton === 'NavProfileButton') {
      return (
        <div id='Nav'>
          <div id='NavProfileButton' className='ChangedNavProfile SelectedNavButton'>THE SHOP</div>
          <button id='NavPostButton' className='NavButtons' style={{justifyContent: 'flex-end'}}  onClick={() => alert('Edit Profile')}>EDIT</button>
          <button id='NavSurfButton' className='NavButtons' style={{justifyContent: 'flex-end'}}  onClick={() => alert('Delete Profile')}>DELETE</button>
          <button id='NavSearchButton' className='NavButtons backButton' onClick={props.handleNavButtonClick}>{'< - -'}</button>
        </div>
      )
    } 
  if (selectedNavButton === 'NavPostButton') {
    if (page === '') {
      return (
        <div id='Nav'>
          <div id='NavProfileButton' className='ChangedNavProfile SelectedNavButton'>THE ARCHIVES</div>
          <button id='NavPostButton' className='NavButtons' style={{justifyContent: 'flex-end'}} onClick={() => props.handleAppState({page: 'BandPostForm'})}>ADD</button>
          <button id='NavSurfButton' className='NavButtons' style={{justifyContent: 'flex-end'}} onClick={() => alert('filter posts')}>FILTER</button>
          <button id='NavSearchButton' className='NavButtons backButton' onClick={props.handleNavButtonClick}>{'< - -'}</button>
        </div>
      )
    }
    if (page === 'BandPostForm') {
      return (
        <div id='Nav'>
          <div id='NavProfileButton' className='ChangedNavProfile SelectedNavButton'>THE ARCHIVES</div>
          <button id='NavPostButton' className='NavButtons' style={{justifyContent: 'flex-end'}}  onClick={() => props.handleAppState({page: 'BandPostPreview'})}>PREVIEW</button>
          <button id='NavSurfButton' className='NavButtons' style={{justifyContent: 'flex-end'}}  onClick={props.handlePostSubmit}>SAVE</button>
          <button id='NavSearchButton' className='NavButtons backButton' onClick={() => props.handleAppState({page: ''})}>{'< - - < - -'}</button>
        </div>
      )
    } 
    if (page === 'BandPostPreview') {
        return (
          <div id='Nav'>
            <div id='NavProfileButton' className='ChangedNavProfile SelectedNavButton'>THE ARCHIVES</div>
            <button id='NavPostButton' className='NavButtons' style={{justifyContent: 'flex-end'}} onClick={() => props.handleAppState({page: 'BandPostForm'})}>EDIT</button>
            <button id='NavSurfButton' className='NavButtons' style={{justifyContent: 'flex-end'}} onClick={props.handlePostSubmit}>SAVE</button>
            <button id='NavSearchButton' className='NavButtons backButton' onClick={() => props.handleAppState({page: ''})}>{'< - - < - -'}</button>
          </div>
        )
    } 
    if (page === 'BandPost') {
      return (
        <div id='Nav'>
          <div id='NavProfileButton' className='ChangedNavProfile SelectedNavButton'>THE ARCHIVES</div>
          <button id='NavPostButton' className='NavButtons' style={{justifyContent: 'flex-end'}} onClick={() => alert('edit post')}>EDIT</button>
          <button id='NavSurfButton' className='NavButtons' style={{justifyContent: 'flex-end'}} onClick={() => props.handleAppState({page: 'PostDrop'})}>DELETE</button>
          <button id='NavSearchButton' className='NavButtons backButton' onClick={() => props.handleAppState({page: ''})}>{'< - - < - -'}</button>
        </div>
      )
    }
    if (page === 'PostDrop') {
      return (
        <div id='Nav'>
          <div id='NavProfileButton' className='ChangedNavProfile SelectedNavButton'>THE ARCHIVES</div>
          <button id='NavPostButton' className='NavButtons' style={{justifyContent: 'flex-end'}} onClick={props.handlePostDelete}>CONFIRM</button>
          <button id='NavSurfButton' className='NavButtons' style={{justifyContent: 'flex-end'}} onClick={() => props.handleAppState({page: 'BandPost'})}>CANCEL</button>
          <button id='NavSearchButton' className='NavButtons backButton' onClick={() => props.handleAppState({page: ''})}>{'< - - < - -'}</button>
        </div>
      )
    }
  }
  if (selectedNavButton === 'NavSurfButton') {
    return (
      <div id='Nav'>
        <div id='NavProfileButton' className='ChangedNavProfile SelectedNavButton'>THE SURF</div>
        <button id='NavPostButton' className='NavButtons' style={{justifyContent: 'flex-end'}}  onClick={() => alert('reply to post')}>REPLY</button>
        <button id='NavSurfButton' className='NavButtons' style={{justifyContent: 'flex-end'}}  onClick={() => alert('filter posts')}>FILTER</button>
        <button id='NavSearchButton' className='NavButtons backButton' onClick={props.handleNavButtonClick}>{'< - -'}</button>
      </div>
    )
  } 
  if (selectedNavButton === 'NavSearchButton') {
    return (
      <div id='Nav'>
        <div id='NavProfileButton' className='ChangedNavProfile SelectedNavButton'>THE WEB</div>
        <button id='NavPostButton' className='NavButtons' style={{justifyContent: 'flex-end'}}  onClick={() => alert('?????')}>????</button>
        <button id='NavSurfButton' className='NavButtons' style={{justifyContent: 'flex-end'}} onClick={() => alert('filter posts')}>FILTER</button>
        <button id='NavSearchButton' className='NavButtons backButton' onClick={props.handleNavButtonClick}>{'< - -'}</button>
      </div>
    )
  }
}

export default Nav;