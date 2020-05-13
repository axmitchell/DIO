import React from 'react';

const VenuePostForm = props => {
  const { image, location, date, description } = props.state;
  return (
      <div id='VenuePostForm'>
          <form id='VenuePostFormImage' className='Content'>
            <input name='image' value={image}  placeholder='post image link' onChange={props.handleChange}/>
          </form>
          <form  id='VenuePostFormDetails' className='Content'>
            <div id='VenuePostFormUserInfo'>
              <div id='VenuePostFormUserInfoName'>{props.userInfo.name}</div>
              <div id='VenuePostFormUserInfoLocation'>({props.userInfo.location})</div>
              <a id='VenuePostFormUserInfoLink' href={props.userInfo.link} target="_blank">bandcamp</a>
            </div>
            <div id='VenuePostFormInput'>
              <input name='location' value={location} placeholder='desired location' onChange={props.handleChange} style={{width: '60%', display: 'flex', justifySelf: 'center'}}/>
              <input name='date' value={date} placeholder='desired date' onChange={props.handleChange} style={{width: '60%', display: 'flex', justifySelf: 'center'}}/>
              <textarea name='description' value={description} placeholder='description' style={{resize: 'none', width: '14em', height: '5em'}} onChange={props.handleChange}/>
            </div>
          </form>
         <button id='VenuePostFormButton' onClick={() => props.handleAppState({page: 'VenuePostPreview'})}>preview</button>
      </div>
  )
}

export default VenuePostForm;
