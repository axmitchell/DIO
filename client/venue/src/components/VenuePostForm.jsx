import React from 'react';

const VenuePostForm = props => {
  const { image, date, description } = props.state;
  return (
      <div id='VenuePostForm'>
          <form id='VenuePostFormImage' className='Content'>
            <input name='image' value={image}  placeholder='post image link' onChange={props.handleChange}/>
          </form>
          <form  id='VenuePostFormDetails' className='Content'>
            <div id='VenuePostFormUserInfo'>
              <div id='VenuePostFormUserInfoName'>{props.userInfo.name}</div>
              <div id='VenuePostFormUserInfoLocation'>({props.userInfo.location})</div>
              <a id='VenuePostFormUserInfoLink' href={props.userInfo.link} target="_blank">link</a>
            </div>
            <div id='VenuePostFormInput'>
              <input name='date' value={date} placeholder='date: mm/dd/yy' onChange={props.handleChange} style={{width: '60%', display: 'flex', justifySelf: 'center'}}/>
              <textarea name='description' value={description} placeholder='description' style={{resize: 'none', width: '14em', height: '5em'}} onChange={props.handleChange}/>
            </div>
          </form>
      </div>
  )
}

export default VenuePostForm;
