import React from 'react';

const SelfPostForm = props => {
  const { image, location, date, description } = props.state;
  return (
      <div id='SelfPostForm'>
          <form id='SelfPostFormImage' className='Content'>
            <input name='image' value={image}  placeholder='post image link' onChange={props.handleChange}/>
          </form>
          <form  id='SelfPostFormDetails' className='Content'>
            <div id='SelfPostFormUserInfo'>
              <div id='SelfPostFormUserInfoName'>{props.userInfo.name}</div>
              <div id='SelfPostFormUserInfoLocation'>({props.userInfo.location})</div>
              <a id='SelfPostFormUserInfoLink' href={props.userInfo.link} target="_blank">bandcamp</a>
            </div>
            <div id='SelfPostFormInput'>
              <input name='location' value={location} placeholder='desired location' onChange={props.handleChange} style={{width: '60%', display: 'flex', justifySelf: 'center'}}/>
              <input name='date' value={date} placeholder='desired date' onChange={props.handleChange} style={{width: '60%', display: 'flex', justifySelf: 'center'}}/>
              <textarea name='description' value={description} placeholder='description' style={{resize: 'none', width: '14em', height: '5em'}} onChange={props.handleChange}/>
            </div>
          </form>
         <button id='SelfPostFormButton' onClick={() => props.handleAppStateChange({page: 'SelfPostPreview'})}>preview</button>
      </div>
  )
}

export default SelfPostForm;
