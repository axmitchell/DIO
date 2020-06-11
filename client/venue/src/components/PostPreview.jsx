import React from 'react';

const PostPreview = props => {
  const { postPhoto, postLocation, postDate, postDescription } = props.postInfo;
  const { link, location, name } = props.userInfo;
  return (
    <div id='PostForm'>
      <div id='PostFormImage' className='Content'>
        <img src={postPhoto}></img>
      </div>
      <div id='PostFormDetails' className='Content'>
        <div id='PostFormUserInfo'>
          <a id='PostFormUserInfoName' href={link} target="_blank">{name}</a>
          <div id='PostFormUserInfoLocation'>({location})</div>
        </div>
        <div id='PostFormInput'>
          {/* <div id='PostFormInputLocation'>{postLocation}</div> */}
          <div id='PostFormInputDate'>{postDate}</div>
          <div id='PostFormInputDescription'>{postDescription}</div>
        </div>
      </div>
    </div>
  )
}

export default PostPreview;
