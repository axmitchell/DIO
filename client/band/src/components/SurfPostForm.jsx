import React from 'react';
import SurfPostFormPreview from './SurfPostFormPreview.jsx';

const SurfPostForm = props => {
  const { currentPost, userInfo } = props;
  return(
    <div id='SurfPostForm' className='Content'>
      <div id='SelectedUserPost'>
        <div id='PostFormDetails' className='SelectedUserPost'>
          <div id='PostFormUserInfo'>
            <a id='PostFormUserInfoName' href={userInfo.link} target="_blank">{userInfo.name}</a>
            <div id='PostFormUserInfoLocation'>({userInfo.location})</div>
          </div>
          <div id='PostFormInput'>
            <div id='PostFormInputLocation'>{currentPost.location}</div>
            <div id='PostFormInputDate'>{currentPost.date}</div>
            <textarea name='postDescription' placeholder='description' style={{resize: 'none', width: '14em', height: '5em'}}/>
          </div>
        </div>
      </div>
      <SurfPostFormPreview currentPost={currentPost}/>
    </div>
  )
}

export default SurfPostForm;