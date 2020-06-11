import React from 'react';

const Nav = props => {
  const { handleNavButtonClick, handlePage, appState, handlePostDelete, handlePostSubmit } = props
  const { name, selectedNavButton, page } = appState
  let profileButtonText = name.toUpperCase();
  if (selectedNavButton === '') {
    return(
      <div id='Nav'>
        <button id='NavProfileButton' className='ChangedNavProfile mainButtons' onClick={handleNavButtonClick} style={{ fontSize: '45px'}}>{profileButtonText}</button>
        <button id='NavPostButton' className='NavButtons mainButtons'  onClick={handleNavButtonClick}>POST</button>
        <button id='NavSurfButton' className='NavButtons mainButtons' onClick={handleNavButtonClick}>SURF</button>
        <button id='NavSearchButton' className='NavButtons mainButtons' onClick={handleNavButtonClick}>SEARCH</button>
      </div>
    )
  } 
  if (selectedNavButton === 'NavProfileButton') {
      return (
        <div id='Nav'>
          <div id='NavProfileButton' className='ChangedNavProfile SelectedNavButton'>THE SHOP</div>
          <button id='NavPostButton' className='NavButtons' style={{justifyContent: 'flex-end'}}  onClick={() => alert('Edit Profile')}>EDIT</button>
          <button id='NavSurfButton' className='NavButtons' style={{justifyContent: 'flex-end'}}  onClick={() => alert('Delete Profile')}>DELETE</button>
          <button id='NavSearchButton' className='NavButtons backButton' onClick={handleNavButtonClick}>{'< - -'}</button>
        </div>
      )
    } 
  if (selectedNavButton === 'NavPostButton') {
    if (page === '') {
      return (
        <div id='Nav'>
          <div id='NavProfileButton' className='ChangedNavProfile SelectedNavButton'>THE ARCHIVES</div>
          <button id='NavPostButton' className='NavButtons' style={{justifyContent: 'flex-end'}} onClick={() => handlePage('PostForm')}>ADD</button>
          <button id='NavSurfButton' className='NavButtons' style={{justifyContent: 'flex-end'}} onClick={() => alert('filter posts')}>FILTER</button>
          <button id='NavSearchButton' className='NavButtons backButton' onClick={handleNavButtonClick}>{'< - -'}</button>
        </div>
      )
    }
    if (page === 'PostForm') {
      return (
        <div id='Nav'>
          <div id='NavProfileButton' className='ChangedNavProfile SelectedNavButton'>THE ARCHIVES</div>
          <button id='NavPostButton' className='NavButtons' style={{justifyContent: 'flex-end'}}  onClick={() => handlePage('PostPreview')}>PREVIEW</button>
          <button id='NavSurfButton' className='NavButtons' style={{justifyContent: 'flex-end'}}  onClick={handlePostSubmit}>SAVE</button>
          <button id='NavSearchButton' className='NavButtons backButton' onClick={() => handlePage('')}>{'< - - < - -'}</button>
        </div>
      )
    } 
    if (page === 'PostPreview') {
        return (
          <div id='Nav'>
            <div id='NavProfileButton' className='ChangedNavProfile SelectedNavButton'>THE ARCHIVES</div>
            <button id='NavPostButton' className='NavButtons' style={{justifyContent: 'flex-end'}} onClick={() => handlePage('PostForm')}>EDIT</button>
            <button id='NavSurfButton' className='NavButtons' style={{justifyContent: 'flex-end'}} onClick={handlePostSubmit}>SAVE</button>
            <button id='NavSearchButton' className='NavButtons backButton' onClick={() => handlePage('')}>{'< - - < - -'}</button>
          </div>
        )
    } 
    if (page === 'Post') {
      return (
        <div id='Nav'>
          <div id='NavProfileButton' className='ChangedNavProfile SelectedNavButton'>THE ARCHIVES</div>
          <button id='NavPostButton' className='NavButtons' style={{justifyContent: 'flex-end'}} onClick={() => alert('edit post')}>EDIT</button>
          <button id='NavSurfButton' className='NavButtons' style={{justifyContent: 'flex-end'}} onClick={() => handlePage('PostDrop')}>DELETE</button>
          <button id='NavSearchButton' className='NavButtons backButton' onClick={() => handlePage('')}>{'< - - < - -'}</button>
        </div>
      )
    }
    if (page === 'PostDrop') {
      return (
        <div id='Nav'>
          <div id='NavProfileButton' className='ChangedNavProfile SelectedNavButton'>THE ARCHIVES</div>
          <button id='NavPostButton' className='NavButtons' style={{justifyContent: 'flex-end'}} onClick={handlePostDelete}>CONFIRM</button>
          <button id='NavSurfButton' className='NavButtons' style={{justifyContent: 'flex-end'}} onClick={() => handlePage('Post')}>CANCEL</button>
          <button id='NavSearchButton' className='NavButtons backButton' onClick={() => handlePage('')}>{'< - - < - -'}</button>
        </div>
      )
    }
  }
  if (selectedNavButton === 'NavSurfButton') {
    if (page === '') {
      return (
        <div id='Nav'>
          <div id='NavProfileButton' className='ChangedNavProfile SelectedNavButton'>THE SURF</div>
          <button id='NavPostButton' className='NavButtons' style={{justifyContent: 'flex-end'}}  onClick={() => {handlePage('SurfPostForm')}}>REPLY</button>
          <button id='NavSurfButton' className='NavButtons' style={{justifyContent: 'flex-end'}}  onClick={() => alert('filter posts')}>FILTER</button>
          <button id='NavSearchButton' className='NavButtons backButton' onClick={handleNavButtonClick}>{'< - -'}</button>
        </div>
      )
    }
    if (page === 'SurfPostForm') {
      return (
        <div id='Nav'>
          <div id='NavProfileButton' className='ChangedNavProfile SelectedNavButton'>THE SURF</div>
          <button id='NavPostButton' className='NavButtons' style={{justifyContent: 'flex-end'}}  onClick={() => alert('PREVIEW POST')}>PREVIEW</button>
          <button id='NavSurfButton' className='NavButtons' style={{justifyContent: 'flex-end'}}  onClick={() => alert('SAVE POST')}>SAVE</button>
          <button id='NavSearchButton' className='NavButtons backButton' onClick={() => handlePage('')}>{'< - - < - -'}</button>
        </div>
      )
    }
  } 
  if (selectedNavButton === 'NavSearchButton') {
    return (
      <div id='Nav'>
        <div id='NavProfileButton' className='ChangedNavProfile SelectedNavButton'>THE WEB</div>
        <button id='NavPostButton' className='NavButtons' style={{justifyContent: 'flex-end'}}  onClick={() => alert('?????')}>????</button>
        <button id='NavSurfButton' className='NavButtons' style={{justifyContent: 'flex-end'}} onClick={() => alert('filter posts')}>FILTER</button>
        <button id='NavSearchButton' className='NavButtons backButton' onClick={handleNavButtonClick}>{'< - -'}</button>
      </div>
    )
  }
}

export default Nav;