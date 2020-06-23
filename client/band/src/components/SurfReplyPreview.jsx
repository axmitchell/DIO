import React from 'react';

const SurfReplyPreview = props => {
  const { currentSurfPost, userInfo, postFront, flipPost, postInfo, handlePostFormChange} = props;
  const { postPhoto, postLocation, postDate, postDescription } = postInfo;
  const { surfPostPhoto, surfPostName, surfPostLocation, surfPostLink, surfPostDate, surfPostDescription } = currentSurfPost;
  if (postFront) {
    return (
      <div id='SelectedUserPost'>
        <div id='PostFormDetails' className='SelectedUserPost' onClick={flipPost}>
          <div id='PostFormUserInfo'>
            <a id='PostFormUserInfoName' href={userInfo.link} target="_blank">{userInfo.name}</a>
            <div id='PostFormUserInfoLocation'>({userInfo.location})</div>
          </div>
          <div id='PostFormInput'>
            <div id='PostFormInputLocation'>{surfPostLocation}</div>
            <div id='PostFormInputDate'>{surfPostDate}</div>
            <div id='PostFormInputDescription'>{postDescription}</div>
          </div>
        </div>
      </div>
    )
  }
  if (!postFront) {
    return (
      <div id='SelectedUserPost'>
        <div id='PostFormImage' className='SelectedUserPost SelectedUserPostPhoto'>
          <img src={postPhoto} onClick={flipPost}></img>
        </div>
      </div>
    )
  }
}

export default SurfReplyPreview;