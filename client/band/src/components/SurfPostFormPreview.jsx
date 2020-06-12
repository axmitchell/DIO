import React from 'react';

const SurfPostFormPreview = props => {
  const { currentPost, userInfo, postFront, flipPost, postInfo, handlePostFormChange} = props;
  const { postPhoto, postLocation, postDate, postDescription } = postInfo;
  if (postFront) {
    return (
      <div id='SelectedUserPost'>
        <div id='PostFormDetails' className='SelectedUserPost' onClick={flipPost}>
          <div id='PostFormUserInfo'>
            <a id='PostFormUserInfoName' href={userInfo.link} target="_blank">{userInfo.name}</a>
            <div id='PostFormUserInfoLocation'>({userInfo.location})</div>
          </div>
          <div id='PostFormInput'>
            <div id='PostFormInputLocation'>{currentPost.location}</div>
            <div id='PostFormInputDate'>{currentPost.date}</div>
            <textarea name='postDescription' value={postDescription} placeholder='description' style={{resize: 'none', width: '14em', height: '5em'}} onChange={handlePostFormChange}/>
          </div>
        </div>
      </div>
    )
  }
  if (!postFront) {
    return (
      <div id='SelectedUserPost'>
        <form id='PostFormImage' className='SelectedUserPost SelectedUserPostPhoto' onClick={flipPost}>
        <input name='postPhoto' value={postPhoto} placeholder='post image link' onChange={handlePostFormChange}/>
        </form>
      </div>
    )
  }
}

export default SurfPostFormPreview;