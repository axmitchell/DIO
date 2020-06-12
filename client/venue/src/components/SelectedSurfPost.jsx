import React from 'react';

const SelectedSurfPost = props => {
  const { currentPost } = props;
  const { name, location, link, date, description, userLocation } = currentPost;
  return(
    <div id='SelectedSurfPost'>      
      <div id='SurfPostDetails' className='SelectedSurfPost'>
        <div id='SurfPostUserInfo'>
          <a id='SurfPostUserInfoName' href={link} target="_blank">{name}</a>
          <div id='SurfPostUserInfoLocation'>({userLocation})</div>
        </div>
        <div id='SurfPostInput'>
          <div id='SurfPostInputLocation'>{location}</div>
          <div id='SurfPostInputDate'>{date}</div>
          <div id='SurfPostInputDescription'>{description}</div>
        </div>
      </div>
    </div>
  )
}

export default SelectedSurfPost;