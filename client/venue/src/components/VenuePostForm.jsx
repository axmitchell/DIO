import React from 'react';

const VenuePostForm = props => {
  const { postPhoto, postLocation, postDate, postDescription } = props.postInfo;
  return (
      <div id='VenuePostForm'>
          <form id='VenuePostFormImage' className='Content'>
            <input name='postPhoto' value={postPhoto}  placeholder='post image link' onChange={props.handlePostFormChange}/>
          </form>
          <form  id='VenuePostFormDetails' className='Content'>
            <div id='VenuePostFormUserInfo'>
              <div id='VenuePostFormUserInfoName'>{props.userInfo.name}</div>
              <div id='VenuePostFormUserInfoLocation'>({props.userInfo.location})</div>
              <a id='VenuePostFormUserInfoLink' href={props.userInfo.link} target="_blank">link</a>
            </div>
            <div id='VenuePostFormInput'>
              <input name='postLocation' value={postLocation} placeholder='location' onChange={props.handlePostFormChange} style={{width: '60%', display: 'flex', justifySelf: 'center'}}/>
              <input name='postDate' value={postDate} placeholder='date: mm/dd/yy' onChange={props.handlePostFormChange} style={{width: '60%', display: 'flex', justifySelf: 'center'}}/>
              <textarea name='postDescription' value={postDescription} placeholder='description' style={{resize: 'none', width: '14em', height: '5em'}} onChange={props.handlePostFormChange}/>
            </div>
          </form>
      </div>
  )
}

export default VenuePostForm;
