import React from 'react';

const BandPostForm = props => {
  const { image, location, date, description } = props.state;
  return (
      <div id='BandPostForm'>
          <form id='BandPostFormImage' className='Content'>
            <input name='image' value={image}  placeholder='post image link' onChange={props.handleChange}/>
          </form>
          <form  id='BandPostFormDetails' className='Content'>
            <div id='BandPostFormUserInfo'>
              <div id='BandPostFormUserInfoName'>{props.userInfo.name}</div>
              <div id='BandPostFormUserInfoLocation'>({props.userInfo.location})</div>
              <a id='BandPostFormUserInfoLink' href={props.userInfo.link} target="_blank">bandcamp</a>
            </div>
            <div id='BandPostFormInput'>
              <input name='location' value={location} placeholder='desired location' onChange={props.handleChange} style={{width: '60%', display: 'flex', justifyBand: 'center'}}/>
              <input name='date' value={date} placeholder='desired date' onChange={props.handleChange} style={{width: '60%', display: 'flex', justifyBand: 'center'}}/>
              <textarea name='description' value={description} placeholder='description' style={{resize: 'none', width: '14em', height: '5em'}} onChange={props.handleChange}/>
            </div>
          </form>
         <button id='BandPostFormButton' onClick={() => props.handleAppState({page: 'BandPostPreview'})}>preview</button>
      </div>
  )
}

export default BandPostForm;
