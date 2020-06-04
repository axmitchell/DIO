import React from 'react';

const PostPreview = props => {
  const { postPhoto, postLocation, postDate, postDescription } = props.postInfo;
  return (
    <div id='PostForm'>
      <div id='PostFormImage' className='Content'>
        <img src={postPhoto}></img>
      </div>
      <div id='PostFormDetails' className='Content'>
        <div id='PostFormUserInfo'>
          <div id='PostFormUserInfoName'>{props.userInfo.name}</div>
          <div id='PostFormUserInfoLocation'>({props.userInfo.location})</div>
          <a id='PostFormUserInfoLink' href={props.userInfo.link} target="_blank">bandcamp</a>
        </div>
        <div id='PostFormInput'>
          <div id='PostFormInputLocation'>{postLocation}</div>
          <div id='PostFormInputDate'>{postDate}</div>
          <div id='PostFormInputDescription'>{postDescription}</div>
        </div>
      </div>
    </div>
  )
}

export default PostPreview;
