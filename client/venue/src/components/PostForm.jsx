import React from 'react';

const PostForm = props => {
  const { postPhoto, postLocation, postDate, postDescription } = props.postInfo;
  return (
      <div id='PostForm'>
          <form id='PostFormImage' className='Content'>
            <input name='postPhoto' value={postPhoto}  placeholder='post image link' onChange={props.handlePostFormChange}/>
          </form>
          <form  id='PostFormDetails' className='Content'>
            <div id='PostFormUserInfo'>
              <div id='PostFormUserInfoName'>{props.userInfo.name}</div>
              <div id='PostFormUserInfoLocation'>({props.userInfo.location})</div>
              <a id='PostFormUserInfoLink' href={props.userInfo.link} target="_blank">link</a>
            </div>
            <div id='PostFormInput'>
              {/* <input name='postLocation' value={postLocation} placeholder='location' onChange={props.handlePostFormChange} style={{width: '60%', display: 'flex', justifySelf: 'center'}}/> */}
              <input name='postDate' value={postDate} placeholder='date: mm/dd/yy' onChange={props.handlePostFormChange} style={{width: '60%', display: 'flex', justifySelf: 'center'}}/>
              <textarea name='postDescription' value={postDescription} placeholder='description' style={{resize: 'none', width: '14em', height: '5em'}} onChange={props.handlePostFormChange}/>
            </div>
          </form>
      </div>
  )
}

export default PostForm;
