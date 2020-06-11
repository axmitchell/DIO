import React from 'react';

const SelectedSurfPost = props => {
  const { currentPost } = props;
  const { name, location, link, date, description } = currentPost;
  return(
    <div id='SelectedSurfPost'>      
      <div id='PostFormDetails' className='SelectedSurfPost'>
        <div id='PostFormUserInfo'>
          <a id='PostFormUserInfoName' href={link} target="_blank">{name}</a>
          <div id='PostFormUserInfoLocation'>({location})</div>
        </div>
        <div id='PostFormInput'>
          <div id='PostFormInputDate'>{date}</div>
          <div id='PostFormInputDescription'>{description}</div>
        </div>
      </div>
    </div>
  )
}

export default SelectedSurfPost; 