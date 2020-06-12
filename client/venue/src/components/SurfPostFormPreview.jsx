import React from 'react';

const SurfPostFormPreview = props => {
  const { currentPost, userInfo, postFront, flipPost} = props;
  if (postFront) {
    return (
      <div id='SelectedUserPost'>
        <div id='PostFormDetails' className='SelectedUserPost' onClick={flipPost}>
          <div id='PostFormUserInfo'>
            <a id='PostFormUserInfoName' href={userInfo.link} target="_blank">{userInfo.name}</a>
            <div id='PostFormUserInfoLocation'>({userInfo.location})</div>
          </div>
          <div id='PostFormInput'>
            <div id='PostFormInputDate'>{currentPost.date}</div>
            <textarea name='postDescription' placeholder='description' style={{resize: 'none', width: '14em', height: '5em'}}/>
          </div>
        </div>
      </div>
    ) 
  }
  if (!postFront) {
    return (
      <div id='SelectedUserPost'>
        <form id='PostFormImage' className='SelectedUserPost SelectedUserPostPhoto' onClick={flipPost}>
          <input name='postPhoto' placeholder='post image link'/>
        </form>
      </div>
    )
  }
}

export default SurfPostFormPreview;