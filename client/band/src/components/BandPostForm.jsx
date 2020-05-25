import React from 'react';

const BandPostForm = props => {
  const { postPhoto, postLocation, postDate, postDescription } = props.postInfo;
  return (
      <div id='BandPostForm'>
          <form id='BandPostFormImage' className='Content'>
            <input name='postPhoto' value={postPhoto}  placeholder='post image link' onChange={props.handlePostFormChange}/>
          </form>
          <form  id='BandPostFormDetails' className='Content'>
            <div id='BandPostFormUserInfo'>
              <div id='BandPostFormUserInfoName'>{props.userInfo.name}</div>
              <div id='BandPostFormUserInfoLocation'>({props.userInfo.location})</div>
              <a id='BandPostFormUserInfoLink' href={props.userInfo.link} target="_blank">bandcamp</a>
            </div>
            <div id='BandPostFormInput'>
              <input name='postLocation' value={postLocation} placeholder='location' onChange={props.handlePostFormChange} style={{width: '60%', display: 'flex', justifySelf: 'center'}}/>
              <input name='postDate' value={postDate} placeholder='date: mm/dd/yy' onChange={props.handlePostFormChange} style={{width: '60%', display: 'flex', justifySelf: 'center'}}/>
              <textarea name='postDescription' value={postDescription} placeholder='description' style={{resize: 'none', width: '14em', height: '5em'}} onChange={props.handlePostFormChange}/>
            </div>
          </form>
      </div>
  )
}

export default BandPostForm;
